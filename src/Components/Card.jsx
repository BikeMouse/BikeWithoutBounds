import React from 'react'

export default function Card(props){
    console.log(props);
    return (
        <div className='card'>
            <div className='flex'>
                <img src={new URL(`../assets/${props.coverImg}`, import.meta.url).href} className='cardImg'/>
            </div>
            <div className='text'>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}