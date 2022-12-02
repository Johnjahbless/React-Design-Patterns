import { useEffect, useState } from "react"


export const ControlledForm = () => {
    const [name, setName ] = useState('');
    const [age, setAge ] = useState('');
    const [hairColor, setHairColor ] = useState('');


    useEffect(() => {
        if (name > 2) {
            console.log("name must be greater than 2 in length")
        }
    }, [name])
    return (
        <form>
            <input 
                name="name"
                type="text"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)}/>
            <input 
                name="age"
                type="number"
                placeholder="age"
                value={age}
                onChange={e => setAge(e.target.value)}/>
            <input 
                name="hairColor"
                type="text"
                placeholder="Hair Color"
                value={hairColor}
                onChange={e => setHairColor(e.target.value)}/>

                <button>Submit</button>
        </form>
    )
}