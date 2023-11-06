import { React, useContext } from "react";
import { ContextPage } from "../../Components/Context";
import { DetailImage } from "../../Components/DetailImage";
import img1 from '../../assets/image-home1.png';
import img3 from '../../assets/image-home3.png';
import img4 from '../../assets/image-home4.png';
import img6 from '../../assets/image-home6.png';
import img7 from '../../assets/image-home7.png';
import img8 from '../../assets/home-img8.png';
import img9 from '../../assets/home-img9.png';
import img10 from '../../assets/home-img10.png';
import img11 from '../../assets/home-img11.png';
import img12 from '../../assets/home-img12.png';
import img13 from '../../assets/home-img13.png';
import img14 from '../../assets/home-img14.png';
import img15 from '../../assets/home-img15.png';
import img16 from '../../assets/home-img16.png';
import img17 from '../../assets/home-img17.png';
import './style.css';

function Productos(){
    const contexto = useContext(ContextPage)

    const Image = (img) => {
            contexto.openDetail()
            contexto.setImage(img)
    }

    return (
        <div className="productos">
            <DetailImage/>

            <h1>Algunos de nuestros productos</h1>
            <section>
                <figure 
                onClick={()=>Image(img1)}
                >
                    <img src={img1}/>
                    <p>CUCHILLAS PAGANI MOD-4090-FAP</p>
                </figure>
                <figure
                onClick={()=>Image(img3)}
                >
                    <img src={img3}/>
                    <p>MOLINOS PAGANI</p>
                </figure>
                <figure
                onClick={()=>Image(img4)}
                >
                    <img src={img4}/>
                    <p>MOLINOS PAGANI</p>
                </figure>
                <figure
                onClick={()=>Image(img6)}
                >
                    <img src={img6}/>
                    <p>EXTRACTOR CICLON 3HP</p>
                </figure>
                <figure
                onClick={()=>Image(img7)}
                >
                    <img src={img7}/>
                    <p>MOLINOS VARIADOS</p>
                </figure>
                <figure
                onClick={()=>Image(img8)}
                >
                    <img src={img8}/>
                    <p>MOLINO TRIA DE 40HP</p>
                </figure>
                <figure
                onClick={()=>Image(img9)}
                >
                    <img src={img9}/>
                    <p>MOLINO TRIA DE 40HP</p>
                </figure>
                <figure
                onClick={()=>Image(img10)}
                >
                    <img src={img10}/>
                    <p>CUCHILLAS PAGANI MOD-2235-HD</p>
                </figure>
                <figure
                onClick={()=>Image(img11)}
                >
                    <img src={img11}/>
                    <p>CRIBAS VARIAS</p>
                </figure>
                <figure
                onClick={()=>Image(img12)}
                >
                    <img src={img12}/>
                    <p>MOLINO CHINO DE 20 HP</p>
                </figure>
                <figure
                onClick={()=>Image(img13)}
                >
                    <img src={img13}/>
                    <p>MOLINO CHINO 30 HP</p>
                </figure>
                <figure
                onClick={()=>Image(img14)}
                >
                    <img src={img14}/>
                    <p>CUCHILLAS PARA COMPACTADORA PAGANI MOD CMB-600</p>
                </figure>
                <figure
                onClick={()=>Image(img15)}
                >
                    <img src={img15}/>
                    <p>CUCHILLAS VARIAS</p>
                </figure>
                <figure
                onClick={()=>Image(img16)}
                >
                    <img src={img16}/>
                    <p>MOLINO PAGANI MOD-2235 DE 15HP</p>
                </figure>
                <figure
                onClick={()=>Image(img17)}
                >
                    <img src={img17}/>
                    <p>MOLINO CHINO DE 20 HP</p>
                </figure>
            </section>
        </div>
    )
}

export { Productos };