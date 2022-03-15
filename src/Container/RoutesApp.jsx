import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import ItemContainerList from './ItemContainerList/ItemContainerList';

function RoutesApp() {

    return (
    <>
        <NavBar/>
        <ItemContainerList greeting='Bienvenidos a Tienda Mora'/>
    </>
    );
}
export default RoutesApp