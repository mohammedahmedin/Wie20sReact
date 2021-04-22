import React, {useState} from "react";
import Menu from "./menu";

function Card(props) {
const  [name, setName] = useState("")


    return(
        <div >
        <div> <button onClick= {()=>{setName ("hej")} }>+</button> </div>

        <button onClick={()=>{setName("hallå")} } >-</button>
       <div>{name}</div> 


       <Menu vadsomhelst = {name} />

        <div> Price: {props.price}</div>
        <div> Nike: {props.name}</div>
       
        
        </div>



    )
}


export default Card;