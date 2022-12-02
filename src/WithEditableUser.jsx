import React, {useState, useEffect, Component} from "react";
import axios from "axios";


export const withEditableuser = (Component, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async() => {
                //const response = await axios.get(`/users/${userId}`);
                // setUser(response.data)
                // setOriginalUser(response.data)
            })()
        },[])
const onChangeUser = changes => {
    setUser({...user, ...changes})
}

const saveUser = async() => {
    const response = await axios.post(`/users/${userId}`, {user});
    setUser(response.data)
    setOriginalUser(response.data)
}

const resetUser = () => {
setUser(originalUser)
}

        return <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={saveUser} onResetUser={resetUser}/>
    }
    
}