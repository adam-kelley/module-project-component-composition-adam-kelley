import { text } from 'express'
import React, {useState, useEffect} from 'react'
import Card from './Card'

const api_Key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`



function App() {
  const [apod, setApod]
  useEffect(() => {
    function fetchPhoto(){
      axios.get(URL)
      .then(res =>{
        setApod(res.data)
      })
      .catch(err => {

      })
    }
    //fetchPhoto()
    setApod({

    })
  })
  if(!apod) return 'Fetching Photo of the Day'
  return (
   <section>
<card 
title={apod.title}
text = {apod.explanation}
imageURL ={apod.URL}
date= {apod.date}
/>
   </section>>
  )
}

export default App
