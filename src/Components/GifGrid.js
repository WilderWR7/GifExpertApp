import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifItem from './GifItem'

export default function GifGrid({ category }) {
    const {data,loading}=useFetchGifs(category);    
    console.log(loading)
    return (
        <>
            <h2 className = 'animate__animated animate__fadeIn' > { category } </h2>
            <div className="card-grid">
            {
                data.map(img=> {
                    return <GifItem key = {img.id}  {...img}/>
                })
            }            
            </div>
        </>
    )
}
