import React from 'react'
import { Menu, Icon } from 'antd';

/* function main(){
  $('menu_bar').click(function(){
      $('nav').toggle();
  });
} */

function Nav() {
  return (
    <div>
      <head>
        <title>Menu</title>
      </head>
      <div>
        <header>
          <div className="menu_bar">
            <a href="#" className="bt-menu"><span><Icon type="unordered-list" /></span>Menu</a>
          </div>
          <nav className="Estilo_Nav">
            <ul>
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
    </div>
  )
}
export default Nav