import React from "react";
import { Slider } from "../../Components/Slider";
import './style.css';

function Home(){

    return(
        <div className="home">
            <div className="home-figure--title">
                <span id="title">Cuchillas y Molinos</span>
                <span>Venta de cuchillas y equipos para la industria del plástico.</span>
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