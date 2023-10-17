import { createContext, useState } from "react";
import app from "../firebase.config";


export const AuthContext = createContext(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    

    const userInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;