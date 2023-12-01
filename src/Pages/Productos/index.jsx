import { React, useContext } from "react";
import { ContextPage } from "../../Components/Context";
import { useState } from "react";
import { DetailImage } from "../../Components/DetailImage";
import { FaSearch } from "react-icons/fa";
import { products } from "../../Components/Products";
import './style.css';

function Productos(){

    const contexto = useContext(ContextPage)
    

    const Image = (img) => {
    contexto.openDetail()
    contexto.setImage(img)
}

    const[item,setItem] = useState(''); 

    const nombre = item.toString().toLocaleLowerCase();

    const nombres = products.filter(item => 
        item.name.toLocaleLowerCase().includes(nombre)
    )

    return (
        <div className="productos">
            <DetailImage/>

        <div className="title">
        <h1>Algunos de nuestros productos</h1>
        </div>

        <div className="busqueda">
        <input 
        className="input"
        value={item}
        onChange={(event)=>{
            setItem(event.target.value)
        }}
        ></input>
        <FaSearch className="lupa"/>
        </div>
        

            <section>
                
            {
             nombres.length ?
            nombres.map(item =>(
                <figure 
                key={item.imgName}
                className="products"
                onClick={()=>Image(item.imgName)}
                >
                    {item.img}
                    {item.texto}
                </figure>
                
            )) : <p className="respuesta">No se encontraron resultados para {item}</p> 
            }
                
            </section>
        </div>
    )
}

export { Productos };
