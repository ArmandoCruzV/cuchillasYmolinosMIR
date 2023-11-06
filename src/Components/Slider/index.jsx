import React from "react";
import imgHomeMir from '../../assets/image-home4.png';
import imgHomeMir2 from '../../assets/image-home1.png';
import imgHomeMir3 from '../../assets/image-home3.png';
import imgHomeMir4 from '../../assets/image-home6.png';
import imgHomeMir5 from '../../assets/image-home7.png';
import './style.css';

function Slider(){

    return(
        <div className="slider">
            <img src={imgHomeMir} className="home-figure--img1"/>
            <img src={imgHomeMir2} className="home-figure--img2"/>
            <img src={imgHomeMir3} className="home-figure--img3"/>
            <img src={imgHomeMir4} className="home-figure--img4"/>
            <img src={imgHomeMir5} className="home-figure--img5"/>
        </div>
    )
}

export { Slider };