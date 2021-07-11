import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

function GifExpertApp() {

    const [category, setcategory] = useState(['wwe']);

    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory setcategory = {setcategory}/>
            <hr/>
            {
                category.map( category=>{
                    return <GifGrid key = { category } category = { category } />
                } )
            }

        </>
    )
}

export default GifExpertApp
