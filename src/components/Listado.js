import React from 'react'
import Item from "./Item"
import Data from "./data.json"


export default function Listado({elementos, setElementos}) {
  
  return (
    <div className='container'>
      {Data.map((item, key)=>
        <Item key={item.id} item={item} setElementos={setElementos} elementos={elementos}/>
      )}
      
    </div>
  )
}
