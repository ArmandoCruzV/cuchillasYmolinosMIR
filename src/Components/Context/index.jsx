import { createContext, useState } from "react";

 export const ContextPage = createContext();

export const ContextoProvider = ({children}) => {
    
    //Monstrador de detalles del producto
    const[open,setOpen] = useState(true)
    const openDetail = () => setOpen(false);
    const closeDetail = () => setOpen(true)

    //Imagen del producto
    const[image,setImage] = useState()

    return(
        <ContextPage.Provider 
        value={{
            open,
            setOpen,
            openDetail,
            closeDetail,
            image,
            setImage,
        }}>
            {children}
        </ContextPage.Provider>
    )
}
