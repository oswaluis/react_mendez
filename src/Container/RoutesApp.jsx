import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Cart from '../components/Cart/Cart';
import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo';
import CartContextProvider from '../context/CartContext';
import ItemContainerList from './ItemContainerList/ItemContainerList';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './itemDetailContainer/ItemDetailContainer';

function RoutesApp() {

    return (
    <BrowserRouter>
        <CartContextProvider>
            <NavBar/>
            <Titulo greeting='Bienvenidos a Tienda Mora'/>
            <Routes>
                <Route
                    path='/contador'
                    element={  <ItemCount/>}
                />
                <Route
                    path='/'
                    element={<ItemContainerList/>}
                />
                <Route
                    path='/productos/:productosId'
                    element={<ItemContainerList/>}
                />
                <Route
                    path='/detalle/:detalleId'
                    element={<ItemDetailContainer/>}
                />
                <Route
                    path='/Cart'
                    element={<Cart/>}
                />
            </Routes>
        </CartContextProvider>
        
    </BrowserRouter>
    );
}
export default RoutesApp