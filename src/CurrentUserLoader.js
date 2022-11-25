import axios from "axios";
import React, { useState, useEffect } from "react";


export const CuurentUserLoader = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://localhost:8080/current-user');
            setUser(response.data)
        })();
    }, [])

    return (
        <>
        {React.Children.map(children, child  => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {user});
                
            } else {
                return child;
            }
        })}
        </>
    )
}