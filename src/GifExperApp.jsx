import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExperApp = () => {

  const [Categories, setCategories] = useState([])
  const [Gifnumber, setGifnumber] = useState(0);



  const onAddCategory = (newCategory) => {
    if (Categories.includes(newCategory)) return;

    setCategories([newCategory, ...Categories]);
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={()=> setGifnumber(Gifnumber+1)}>gregar</button>  
      <p>{Gifnumber}</p>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      >
      </AddCategory>



      {
        Categories.map(cat => (
          <GifGrid key={cat} cat={cat}   Gifnumber ={Gifnumber} />
        ))
      }


    </>
  )
}
