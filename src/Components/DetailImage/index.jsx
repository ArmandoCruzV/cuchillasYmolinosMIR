import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { products } from "../Products";
import { ContextPage } from "../Context";
import img from "../../assets/fondo-home-MIR.jpg"
import { FaWindowClose } from 'react-icons/fa';
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import './style.css';

function DetailImage(){
    const contexto = useContext(ContextPage);
    const indexNum = parseInt(contexto.index);

    useEffect(()=> {
        
             contexto.setPosition(indexNum) 

    },[contexto.open]);

    function regresar(){
        return(
            contexto.position >= 1  
            ? <IoIosArrowBack 
                className="btnRegresar"
                onClick={() => contexto.setPosition(contexto.position - 1)}/>
            : <IoIosArrowBack  
                className="btnRegresar"
                onClick={() => contexto.setPosition(products.length - 1)}/>
        )
    }

    function sumar(){
        return(
            contexto.position < products.length - 1
            ? <IoChevronForwardOutline  
                className="btnDelante"
                onClick={() => contexto.setPosition(contexto.position + 1)} />
            : <IoChevronForwardOutline  
                className="btnDelante"
                onClick={() => contexto.setPosition(0)}/>
        )
    }

    return(
        <div 
        className="detail-image"
        style={contexto.open? {display: 'none'} : {display: 'grid'} }
        >
        <img className="image-fondo" src={img}/>
        
        <div className="icon-container">
            <FaWindowClose 
            className="icon-close"
            onClick={()=>contexto.closeDetail()}
            />
        </div>
       
        { sumar() }
        { regresar() }
        <figure id="figure-img">
            { contexto.position == -1
             ? products[0].img 
             : products[contexto.position].img
            }
        </figure>
        </div>
    )
}

export { DetailImage };