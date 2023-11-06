import { useRoutes, BrowserRouter } from "react-router-dom";
import { ContextoProvider } from "./Components/Context";
import { Home } from "./Pages/Home";
import { Contactanos } from "./Pages/Contactanos";
import { Productos } from "./Pages/Productos";
import { Navbar } from "./Components/Navbar";
import { Videos } from "./Pages/Videos";
import './App.css'

function App(){

function AppRoutes(){
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/nosotros', element: <Home/>},
        {path: '/contactanos', element: <Contactanos/>},
        {path: '/productos', element: <Productos/>},
        {path: '/videos', element: <Videos/>},
    ])

    return routes;
}


    return(
        <ContextoProvider>
            <BrowserRouter>
                <Navbar/>
                <AppRoutes/>
            </BrowserRouter>
        </ContextoProvider>
    )
}

export default App;