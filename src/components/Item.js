export default function Item({item, setElementos, elementos}) {

  const buy = () => {
    if(item.stock > 0){
      item.stock = item.stock - 1;
        setElementos(
          elementos + 1,
        )
    }
  }
  

  return (
    <div className='producto'>    
         
        <h3>{item.producto.nombre}</h3>
        <p>{item.producto.descripcion}</p>
        <br/>
        <h5>En stock: <span>{item.stock}</span></h5>
        <button
        onClick = {buy}
        disabled ={item.stock > 0 && false}    
        >
        {item.stock > 0 ? "Comprar" : "Sin stock" }
          </button> 
      
    </div>
  )
}
