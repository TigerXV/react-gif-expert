import React, { useState } from 'react'
//Crear un input
export const AddCategory = ({ onNewCategory }) => {
    const [Inputvalue, setInputvalue] = useState('')

    const OnSubmit = (event) =>{
        event.preventDefault();
     if ( Inputvalue.trim().length <= 1 ) return;
        
     
    //  setCategory(categories => [Inputvalue, ...categories]);
     
    onNewCategory( Inputvalue.trim() );
    setInputvalue('');

    }      
    const onSearchCategory = (event) =>{
        setInputvalue(event.target.value);
       
        }

    return (
          <form onSubmit = {OnSubmit}>
              <input 
              type="text"
              placeholder='Buscar gif'
              value={ Inputvalue }
              onChange ={ onSearchCategory }

              ></input>
          </form>
    )
}
