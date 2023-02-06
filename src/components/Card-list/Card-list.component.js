import React from "react";
import "./Card-list.style.css";
import { Card } from "../card/card.component";

export const Display=props=>{
return (
  <div className="card-list">
    {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}  />
      
    ))}
  </div>
);
    
}