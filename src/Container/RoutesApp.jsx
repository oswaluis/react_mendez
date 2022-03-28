import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo';
import ItemContainerList from './ItemContainerList/ItemContainerList';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './itemDetailContainer/ItemDetailContainer';

function RoutesApp() {

    return (
    <BrowserRouter>
        <NavBar/>
        <Titulo greeting='Bienvenidos a Tienda Mora'/>
        <Routes> //los componentes que quiero que sean una pagina aparte  
            <Route
                path='/contador'
                element={  <ItemCount/>}
                />
            
            <Route 
                path='/'
                element={<ItemContainerList 
                />}
            />   
            
            <Route
                path='/detalle/:detalleId'
                element={<ItemDetailContainer/>}
            />
        </Routes>
    </BrowserRouter>
    );
}
export default RoutesApp