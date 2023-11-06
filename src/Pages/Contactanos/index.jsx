import React from "react";
import { GiSmartphone } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import './style.css';

function Contactanos(){
    return (
        <div className="contactanos">
            <h1>Contacta con nosotros</h1>

            <div className="contactanos-container">
            <form  action="https://formsubmit.co/hao_2-d@hotmail.com" method="POST">
                <label form="Nombre">Nombre</label>
                <input type="text" name="name" required></input>

                <label form="email">
                    Correo Electronico
                </label>
                <input type="text" name="email" required></input>

                <label form="subject">
                    Asunto
                </label>
                <input className="asunto" type="text" name="subject" required></input>

                <label form="subject">
                    Comentarios
                </label>
                <textarea type="text" name="subject"></textarea>

                <input className="btn-send" type="submit" value="Enviar"></input>
            </form>

            <div className="visitanos">
                <h2>Visitanos</h2>
                <figure className="oficinas-title">
                    <ImLocation2 className="icono-oficinas"/>
                    <span>Nuestras oficinas</span>
                </figure>

                <span>Calle 8 No.638 Col. Monte Alto, Azcapotzalco, México</span>
                <span>Lunes a viernes de 8:00 am a 6:00 pm y sábados 8:00 am a 2:00 pm</span>
            
                <figure className="numeros-title">
                    <GiSmartphone className="icono-numeros"/>
                    <span>Nuestros números</span>
                </figure>
                    <span>+52 55 5719 2707</span>
                    <span>+52 55 2070 0543</span>
            </div>
            </div>
        </div>
    )
}

export { Contactanos };