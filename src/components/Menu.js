import React from "react";
import { Data } from "../helpers/Data";
import MenuItems from "./MenuItems";
import "../styles/Menu.css"

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-title">Takılarımız</h1>
      <div className="menu-list">
        {Data.map((menuItem, index) => {
          return <MenuItems 
          key={index} 
          image={menuItem.image} 
          name={menuItem.name} 
          content={menuItem.content} 
          price={menuItem.price}/>
        })}
          
      </div>
    </div>
  );
}

export default Menu;
