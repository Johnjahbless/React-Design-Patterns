import e from "express";
import { withEditableuser } from "./WithEditableUser";

export const UserInfoForm = withEditableuser(({user, onChangeUser, onSaveUser, onResetUser}) => {
    const { name, age, hairColor} = user || null;


    return user ? (
        <>
        <label>
            Name: 
        <input value={name} onChange={e => onChangeUser({name: e.target.value})}/>
            </label>
        <label>
            Age: 
        <input value={age} onChange={e => onChangeUser({age: e.target.value})}/>
            </label>
        <label>
            Hair Color: 
        <input value={hairColor} onChange={e => onChangeUser({hairColor: e.target.value})}/>
            </label>

            <button onClick={onResetUser}>Reset Users</button>
            <button onClick={onSaveUser}>Save Users</button>
        </>
    ) : <p>Loading...</p>
}, '123')