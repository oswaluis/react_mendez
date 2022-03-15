import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import ItemContainerList from './ItemContainerList/ItemContainerList';
import ItemCount from './ItemCount/ItemCount';

function RoutesApp() {

    return (
    <>
        <NavBar/>
        <ItemContainerList greeting='Bienvenidos a Tienda Mora'/>
        <ItemCount/>
    </>
    );
}
export default RoutesApp