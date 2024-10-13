import React from 'react'
import "../styles/Menu.css"

function MenuItems({image, name, content, price}) {
  
  return (
    <div className='menu-item'>
      <div>
        <img src={image} alt='Error'/>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <p>
          <i style={{color:"red"}}>{price}</i>
          </p>
      </div>
    </div>
  )
}

export default MenuItems