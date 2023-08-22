// import logo from './logo.svg'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Navbar from './Pages/Shared/Header/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AdminPanel from './Pages/Dashboard/AdminPanel/AdminPanel';
 
 
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/home' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
            
            <Route exact path='/dashboard' element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            } />
            
            <Route exact path='/admin' element={
              <AdminRoute>
                <AdminPanel></AdminPanel>
              </AdminRoute>
            } />

            <Route path = '*' element={<NotFound/>}/>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div> 
  );
}

export default App;
