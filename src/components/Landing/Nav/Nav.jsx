import React from 'react'
import {Menu} from 'antd';


function Nav(){
    return(
        <div className='contenedorNav'>
            <div className="logonavbar" />
        <Menu
         theme="aliyunTheme"
        //theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'}}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Caracterisitcas</Menu.Item>
        <Menu.Item key="3">Cotiza</Menu.Item>
        <Menu.Item key="4">Novedades</Menu.Item>
        <Menu.Item key="5">Estrategia</Menu.Item>
        <Menu.Item key="6">Articulos</Menu.Item>
        <Menu.Item key="7">Iniciar Seción</Menu.Item>
      </Menu>
      </div>
    )
}
export default Nav