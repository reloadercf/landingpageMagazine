import React from 'react'
import { Menu, Icon } from 'antd';
import logo from '../../../assets/images/logoyoumagazine 2.png'
import { Link } from 'react-router-dom';
function Nav() {
  return (
      <div className="Estilo_Header">
        <header>
          <div className="menu_bar">
            <a  className="bt-menu"><span><Icon type="unordered-list" /></span>Menu</a>
          </div>
          <nav className="Estilo_Nav">
            <ul>
              <li><img src={logo} className="EstiloLogo"/></li>
              <li><a><span><Icon type="home" /></span>Home</a></li>
              <li><a><span><Icon type="tags" /></span>Caracteristicas</a></li>
              <li><a><span><Icon type="shopping" /></span>Cotiza</a></li>
              <li><a><span><Icon type="star" /></span>Novedades</a></li>
              <li><a><span><Icon type="radar-chart" /></span>Estrategia</a></li>
              <li><a><span><Icon type="read" /></span>Artículos</a></li>
              <li><a><span><Icon type="user" /></span>Iniciar Sesión</a></li>
            </ul>
          </nav>
        </header>
      </div>
    
  )
}
export default Nav