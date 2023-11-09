import React from "react";
import { Slider } from "../../Components/Slider";
import icono from '../../assets/icono-MIR.png';
import molinos from '../../assets/molinos.png';
import planeta from '../../assets/planeta.png';
import './style.css';

function Home(){

    return(
        <div className="home">

            <img src={molinos} className="molinos"/>
            <img src={planeta} className="planeta"/>

            <div className="home-figure--title">
                <span id="title">Cuchillas y Molinos</span>
                <span id="title-reciclaje">Reciclaje y venta de</span>
                <span id="title-reciclaje2"> plástico molido</span>
                <img id="title-reciclaje3" src={icono}></img>
                <p className="subtitle">Venta de plástico reciclado molido, cuchillas y equipos para la industria misma.</p>
            </div>

            <div className="home-figure">
                <Slider className="figure"/>
            </div>

            <div className="home-span">
            <span >
                <p>
                    Venta de Polipropileno (PP) y Polietileno de alta densidad (HDPE) entre otros tipos de plásticos,
                     fabricantes de cuchillas, compra venta de molinos </p>
                     <p> <div className="planet-shadow"></div>
                    de plástico y equipo periférico como son compactadoras,
                     paletizadoras, pigmentadoras y reciclado, 
                        creada con la finalidad de cubrir las
                      necesidades del mercado de la industria del plástico
                       para atender las demandas más exigentes de empresas 
                    que se dedican a la transformación del plástico.
                </p>
            </span>
            </div>
        </div>
    )
}

export { Home };