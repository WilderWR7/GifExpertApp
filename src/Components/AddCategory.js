import React, { useState } from 'react'

function AddCategory({ setcategory }) {

    const [input, setinput] = useState("");
    const submitChange = (e)=>{
        e.preventDefault(); 
        setcategory(val => [input,...val])
    }
    
    const inputChange = (e)=>{
        setinput(e.target.value);
    }
    


    return (
        <form onSubmit = { submitChange } >
            <input onChange = { inputChange }/>
        </form>
    )
}


export default AddCategory

