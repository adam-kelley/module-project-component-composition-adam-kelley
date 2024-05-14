import React from 'react'
import figure from '../figure/figure'


export default function card({title, text, imageURL, date}){
    return(
    <div className= 'card'>
     <h2>{title} </h2>
     <p>{text}</p>
    <figure
   imageURL = {apod.URL}
   caption= {date}
   
    />
   </div>)
   }