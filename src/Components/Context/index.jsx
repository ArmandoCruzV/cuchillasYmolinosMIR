import { createContext, useState } from "react";
import { products } from "../Products";

 export const ContextPage = createContext();

export const ContextoProvider = ({children}) => {
    
    //Monstrador de detalles del producto
    const[open,setOpen] = useState(true)
    const openDetail = () => setOpen(false)
    const closeDetail = () => setOpen(true)

    //Imagen del producto
    const[image,setImage] = useState()
    const index = products.findIndex(item => 
        item.imgName == image
    );
    const[position, setPosition] = useState(0);

    return(
        <ContextPage.Provider 
        value={{
            open,
            setOpen,
            openDetail,
            closeDetail,
            image,
            setImage,
            position,
            setPosition,
            index,
        }}>
            {children}
        </ContextPage.Provider>
    )
}
