import React from "react";
import { Slider } from "../../Components/Slider";
import icono from '../../assets/icono-MIR.png';
import './style.css';

function Home(){

    return(
        <div className="home">
            <div className="home-figure--title">
                <span id="title">Cuchillas y Molinos</span>
                <span id="title-reciclaje">Reciclaje y venta</span>
                <span id="title-reciclaje2">de plástico molido</span>
                <img id="title-reciclaje3" src={icono}></img>
                <span className="subtitle">Venta de plástico reciclado molido, cuchillas y equipos para la industria misma.</span>
            </div>

            <div className="home-figure">
                <Slider />
            </div>

            <div className="home-span">
            <span >
                <p>Fabricantes de cuchillas, compra venta de molinos 
                    de plástico y equipo periférico como son compactadoras,
                     paletizadoras, pigmenta doras y reciclado, desde hace 
                     más de 18 años, creada con la finalidad de cubrir las
                      necesidades del mercado de la industria del plástico
                       para atender las demandas más exigentes de empresas 
                    que se dedican a la transformación del plástico.</p>
            </span>
            </div>
        </div>
    )
}

export { Home };