import React, {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [loggedInUser, setLoggedInUser] = useState('')
    const [userNotLogged, setUserNotLogged] = useState(true)
    const [successRegister, setSuccessRegister] = useState(false)
    const [userNotRegister, setUserNotRegister] = useState(true)
    const [alreadyRegisteredUse, setAlreadyRegisteredUse] = useState(false)
    const [time, setTime] = useState();

    return (
        <AuthContext.Provider value={{
            loggedInUser,
            setLoggedInUser,
            userNotLogged,
            setUserNotLogged,
            successRegister,
            setSuccessRegister,
            userNotRegister,
            setUserNotRegister,
            alreadyRegisteredUse,
            setAlreadyRegisteredUse,
            time,
            setTime,

        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
