import { React, useContext } from "react";
import { useState } from "react";
import { ContextPage } from "../../Components/Context";
import { DetailImage } from "../../Components/DetailImage";
import { FaSearch } from "react-icons/fa";
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
import polipropileno from '../../assets/polipro.jpg';
import polietileno from '../../assets/polietileno.jpg';
import PEazul from '../../assets/PEazul.jpg';
import peBlanco from '../../assets/peBlanco.jpg';
import PEmorado from '../../assets/PEmorado.jpg';
import PEverde from '../../assets/PEverde.jpg';
import PPamarillo from '../../assets/PPamarillo.jpg';
import PPMultiColor from '../../assets/PPMultiColor.jpg';
import PPnegro from '../../assets/PPnegro.jpg';
import './style.css';

function Productos(){
    const contexto = useContext(ContextPage)

    const Image = (img) => {
            contexto.openDetail()
            contexto.setImage(img)
    }

    const products =[
        {name:'polietileno',
        img: <img src={polietileno}/>,
        texto: <p>HDPE (Polietileno de alta densidad)</p>,
        funcion: ()=>Image(polietileno),
        },
        {name:'polipropileno',
        img: <img src={polipropileno}/>,
        texto: <p>PP (Polipropileno)</p>,
        funcion: ()=>Image(polipropileno),
        },
        {name:'PPamarillo',
        img: <img src={PPamarillo}/>,
        texto: <p>PP (Polipropileno)</p>,
        funcion: ()=>Image(PPamarillo),
        },
        {name:'PPMultiColor',
        img: <img src={PPMultiColor}/>,
        texto: <p>PP (PPMultiColor)</p>,
        funcion: ()=>Image(PPMultiColor),
        },
        {name:'PPnegro',
        img: <img src={PPnegro}/>,
        texto: <p>PP (PPnegro)</p>,
        funcion: ()=>Image(PPnegro),
        },
        {name:'PEazul',
        img: <img src={PEazul}/>,
        texto: <p>PP (PEazul)</p>,
        funcion: ()=>Image(PEazul),
        },
        {name:'peBlanco',
        img: <img src={peBlanco}/>,
        texto: <p>PP (peBlanco)</p>,
        funcion: ()=>Image(peBlanco),
        },
        {name:'PEmorado',
        img: <img src={PEmorado}/>,
        texto: <p>PP (PEmorado)</p>,
        funcion: ()=>Image(PEmorado),
        },
        {name:'PEverde',
        img: <img src={PEverde}/>,
        texto: <p>PP (PEverde)</p>,
        funcion: ()=>Image(PEverde),
        },
        {name:'CUCHILLAS PAGANI MOD-4090-FAP',
        img: <img src={img1}/>,
        texto: <p>CUCHILLAS PAGANI MOD-4090-FAP</p>,
        funcion: ()=>Image(img1),
        },
        {name:'MOLINOS PAGANI',
        img: <img src={img3}/>,
        texto: <p>MOLINOS PAGANI</p>,
        funcion: ()=>Image(img3),
        },
        {name:'MOLINOS PAGANI',
        img: <img src={img4}/>,
        texto: <p>MOLINOS PAGANI</p>,
        funcion: ()=>Image(img4),
        },
        {name:'EXTRACTOR CICLON 3HP',
        img: <img src={img6}/>,
        texto: <p>EXTRACTOR CICLON 3HP</p>,
        funcion: ()=>Image(img6),
        },
        {name:'MOLINOS VARIADOS',
        img: <img src={img7}/>,
        texto:  <p>MOLINOS VARIADOS</p>,
        funcion: ()=>Image(img7),
        },
        {name:'MOLINO TRIA DE 40HP',
        img: <img src={img8}/>,
        texto:  <p>MOLINO TRIA DE 40HP</p>,
        funcion: ()=>Image(img8),
        },
        {name:'MOLINO TRIA DE 40HP',
        img: <img src={img9}/>,
        texto:  <p>MOLINO TRIA DE 40HP</p>,
        funcion: ()=>Image(img9),
        },
        {name:'CUCHILLAS PAGANI MOD-2235-HD',
        img: <img src={img10}/>,
        texto:  <p>CUCHILLAS PAGANI MOD-2235-HD</p>,
        funcion: ()=>Image(img10),
        },
        {name:'CRIBAS VARIAS',
        img: <img src={img11}/>,
        texto:  <p>CRIBAS VARIAS</p>,
        funcion: ()=>Image(img11),
        },
        {name:'MOLINO CHINO DE 20 HP',
        img: <img src={img12}/>,
        texto:  <p>MOLINO CHINO DE 20 HP</p>,
        funcion: ()=>Image(img12),
        },
        {name:'MOLINO CHINO 30 HP',
        img: <img src={img13}/>,
        texto:  <p>MOLINO CHINO 30 HP</p>,
        funcion: ()=>Image(img13),
        },
        {name:'CUCHILLAS PARA COMPACTADORA PAGANI MOD CMB-600',
        img: <img src={img14}/>,
        texto:  <p>CUCHILLAS PARA COMPACTADORA PAGANI MOD CMB-600</p>,
        funcion: ()=>Image(img14),
        },
        {name:'CUCHILLAS VARIAS',
        img: <img src={img15}/>,
        texto:  <p>CUCHILLAS VARIAS</p>,
        funcion: ()=>Image(img15),
        },
        {name:'MOLINO PAGANI MOD-2235 DE 15HP',
        img: <img src={img16}/>,
        texto:  <p>MOLINO PAGANI MOD-2235 DE 15HP</p>,
        funcion: ()=>Image(img16),
        },
        {name:'MOLINO CHINO DE 20 HP',
        img: <img src={img17}/>,
        texto:  <p>MOLINO CHINO DE 20 HP</p>,
        funcion: ()=>Image(img17),
        },
    ];

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
                    nombres.map(item =>{ 
                        return(
                            <figure className="products"
                            onClick={item.funcion}
                            >
                                {item.img}
                                {item.texto}
                            </figure>
                        )
                    })
                }
            </section>
        </div>
    )
}

export { Productos };
