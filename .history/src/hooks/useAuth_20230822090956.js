//step-6-context

import { useContext } from "react"
import { AuthContext } from "../../src/contexts/AuthProvider/AuthProvider"

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;