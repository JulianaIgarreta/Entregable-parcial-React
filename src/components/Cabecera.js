import React from 'react'
import '../index.css'


export default function Cabecera({elementos}) {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <span>{elementos}</span></p>
    </header>
  )
}
