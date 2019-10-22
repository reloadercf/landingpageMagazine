import React from 'react';
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Caracteristicas from './Caracteristicas/Caracteristicas'
import Cotizador from './Cotizador/Cotizador'
import ArgumentosCierre from './Argumentos/ArgumentosCierre'
import Beneficios from './Beneficios/Beneficios'
import Contexto from './Contextos/Contexto'
import Articulos from './Articulos/Articulos'
import { Layout} from 'antd';

let {  Footer } = Layout;

function Landing(){

    return(
        <div>
                <Nav/>
                <Header/>
                <Caracteristicas/>
                <Cotizador/>
                <ArgumentosCierre/>
                <Beneficios/>
                <Contexto/>
                <Articulos/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </div>
    )
}
export default Landing