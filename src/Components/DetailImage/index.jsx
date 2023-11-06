import React from "react";
import { useContext } from "react";
import { ContextPage } from "../Context";
import img from "../../assets/fondo-home-MIR.jpg"
import { FaWindowClose } from 'react-icons/fa';
import './style.css';

function DetailImage(){
    const contexto = useContext(ContextPage);

    return(
        <div 
        className="detail-image"
        style={contexto.open? {display: 'none'} : {display: 'grid'}}
        >
        <img className="image-fondo" src={img}/>
        
        <div className="icon-container">
            <FaWindowClose 
            className="icon-close"
            onClick={()=>contexto.closeDetail()}
            />
        </div>

        <figure id="figure-image">
            <img className="image" src={contexto.image}/>
        </figure>
        </div>
    )
}

export { DetailImage };