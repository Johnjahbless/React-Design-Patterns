import React from "react";

export const UncontrolledForm = () => {
    const NameInput = React.createRef();
    const AgeInput = React.createRef();
    const HairColorInput = React.createRef();

    const handleSubmit = (e) => {
        console.log(NameInput.current.value);
        console.log(AgeInput.current.value);
        console.log(HairColorInput.current.value);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" ref={NameInput}/>
            <input name="age" type="number" placeholder="age" ref={AgeInput}/>
            <input name="haircolor" type="text" placeholder="hair color" ref={HairColorInput}/>
            <input type="submit" value="submit"/>
        </form>
    )
}