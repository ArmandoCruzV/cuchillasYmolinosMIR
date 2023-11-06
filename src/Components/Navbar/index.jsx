import { React, useState } from "react";
import { BiMailSend,BiSolidVideos } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { PiImages } from 'react-icons/pi';
import { NavLink } from "react-router-dom";
import icono from '../../assets/icono-MIR.png';
import './style.css';

function Navbar(){
    const activeStyle = {
        color: 'white',
        padding: '8px',
        borderRadius: '10px',
        textDecoration: 'none',
        background: 'linear-gradient(45deg, gray, #2c283d)',
    };

    const offActiveStyle = {
        textDecoration: 'none',
        color: '#66c1ff',
    };

    const [item, setItem] = useState(null);

    return(
        <nav className="navbar">
            <div className="icono-repeact"></div>
            <div className="icono-repeact2"></div>

            <div className="icono">
                < img className="icono-img" src={icono}></img>
            </div>
            <ul className="navbar-ul">
                <li>
                    <NavLink 
                    className="nav-link"
                    to={'/nosotros'}
                    onClick={()=>setItem("nosotros")}
                    style={({isActive})=>
                        isActive ? activeStyle : offActiveStyle
                    }
                    >
                          <AiOutlineHome 
                          className='nav-link--contactanosIcon'
                          style={item == "nosotros"? {color: 'black'} : {color: 'tomato'}}
                          /> 
                            <span>Nosotros</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className="nav-link"
                    to={'/productos'}
                    onClick={()=>setItem("productos")}
                    style={({isActive})=>
                    isActive ? activeStyle : offActiveStyle
                    }
                    >
                        <PiImages 
                        className='nav-link--contactanosIcon'
                        style={item == "productos"? {color: 'black'} : {color: 'tomato'}}
                        /> 
                        <span>Productos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className="nav-link"
                    to={'/videos'}
                    onClick={()=>setItem("videos")}
                    style={({isActive})=>
                    isActive ? activeStyle : offActiveStyle
                    }
                    >
                        <BiSolidVideos 
                        className='nav-link--contactanosIcon'
                        style={item == "videos"? {color: 'black'} : {color: 'tomato'}}
                        /> 
                        <span>Videos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className="nav-link"
                    to={'/contactanos'}
                    onClick={()=>setItem("contactos")}
                    style={({isActive})=>
                        isActive ? activeStyle : offActiveStyle
                    }
                    >
                          <BiMailSend  
                          className='nav-link--contactanosIcon'
                          style={item == "contactos"? {color: 'black'} : {color: 'tomato'}}
                          /> 
                            <span>Contactanos</span>
                    </NavLink>
                </li>
            </ul>
            
            <div className="icon-contact">
                <a 
                className="container-iconFacebook" 
                href="https://www.facebook.com/cuchillasmir.reyes"
                >
                    <BsFacebook className="icon-contact--facebook"/>
                </a>
                
                <div className="container-iconWatsapp">
                    <div className="container-iconWatsapp--num">
                    <p>+52 55 5719 2707</p>
                    <p>+52 55 2070 0543</p>
                    </div>
                    <IoLogoWhatsapp className="icon-contact--whatsapp"/>
                </div>
            </div>
        </nav>
    )
}

export { Navbar };