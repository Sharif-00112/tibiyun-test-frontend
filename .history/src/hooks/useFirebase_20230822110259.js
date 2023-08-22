import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updatePassword, sendEmailVerification, updateProfile, getIdToken } from "firebase/auth";
import { useEffect } from "react";
  
initializeAuthentication(); 
 
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
 
    const signInUsingGoogle = (location, navigate) =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          setUser(result.user);
          // save user to the database
          saveUserToDB(result.user.email, result.user.displayName, 'PUT');
          const destination = location?.state?.from || '/dashboard';
          navigate(destination);
      }).catch((error) => {
          // Handle Errors here.
          setError(error.code);
          setError(error.message);
          // The email of the user's account used.
          setError(error.customData.email);
          // The AuthCredential type that was used.
          setError(GoogleAuthProvider.credentialFromError(error));
      }).finally(() =>{
        setIsLoading(false);
      });
    };

    const customLogin = (email, password, location, navigate) =>{
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const destination = location?.state?.from || '/';
        navigate(destination);
        setUser(userCredential.user);
        setError('');
      })
      .catch((error) => {
        setError(error.code);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    };
 
    const customRegister = (email, password, navigate, name) =>{
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // updating name in firebase
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
        }).catch((error) => {
          setError(error.code);
          setError(error.message);
        });
        // const user = userCredential.user;
        // console.log(user);
        setUser(userCredential.user);
        // save user to the database
        saveUserToDB(userCredential.user.email, userCredential.user.displayName, 'POST')
        // clear error message
        setError('');
        alert("Registration successful. Please login now");
        logout();
        navigate('/login')
      })
      .catch((error) => {
        setError(error.code);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    };

    const handleLoginSubmitBtn = e =>{
      e.preventDefault();
      // console.log(email, password);
      customLogin(email, password);
    }

    const handleRegisterSubmitBtn = e =>{
      e.preventDefault();
      // console.log(email, password);

      if(!/.{8,}/.test(password)){
        setError('Ensure password is of minimum length 8');
        return;
      }
      customRegister(email, password);
    }

    const handleNameChange = e =>{
      setName(e.target.value);
    }

    const handleEmailChange = e =>{
      setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
      setPassword(e.target.value);
    }

    const handleForgotPassword = () =>{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
      })
      .catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    const handleChangePassword = () =>{
      const user = auth.currentUser;
      const newPassword = password;
      updatePassword(user, newPassword).then(() => {
        // Update successful.
      }).catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    const setUserName = () =>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
      }).catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    //observe user login change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              setUser(user);

              //JWT (different style from Firebase documentation)
              getIdToken(user)
              // .then(idToken => console.log(idToken))
              // .then(idToken => localStorage.setItem('idToken', idToken))
              .then(idToken => setToken(idToken))

            } else {
              // User is signed out
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[auth]);
 
    // check Admin
    useEffect( () =>{
      fetch(`http://localhost:3010/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    } ,[user.email])

    const logout = () =>{
      setIsLoading(true);
      signOut(auth)
      .then(() => {
          // Sign-out successful.
          setUser({});
        }).catch((error) => {
          setError(error);
        }).finally(()=>{
          setIsLoading(false);
        });
    }

    const saveUserToDB = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('http://localhost:3010/users', {
          method: method,
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then()
    }

    return {
      signInUsingGoogle, 
      customLogin, 
      customRegister,
      handleLoginSubmitBtn,
      handleRegisterSubmitBtn,
      handleNameChange,
      handleEmailChange,
      handlePasswordChange,
      handleForgotPassword,
      handleChangePassword,
      verifyEmail,
      setUserName,
      logout,
      user, 
      admin,
      error,
      isLoading,
      token
    };
}

export default useFirebase;