import React from 'react'
import logo from '../../../assets/images/logoyoumagazine.png'
import celular from '../../../assets/images/aplicacion-ejemplo-iphone-x.png'
import android from '../../../assets/images/google.png'
import ios from '../../../assets/images/apple.png'

function Header(){
    return (
        <div className="cover">
        
            <img className="cover_cover_alineacion_mx" alt='Logotipo' src={logo} />
          
        
            <img className="cover_cover_alineacion_cell" alt='Descarga' src={celular} />
          

          <div className="cover_alineacion_titulo">
            <h1>
             You Magazine es tu aplicación móvil
           </h1>

            <div className='desHeader'>
              Revista, Periodico Digital, Blog ó Canal
            </div>
          </div>

           
          <div className='cover_alineacion'>
          
            <div className="texto">
              Tu contenido disponible en cualquier plataforma
            </div>

            <div className="cover_cover_alineacion_apps">
                <img alt='Descarga' src={android} />
                <img alt='descarga' src={ios} />
            </div>

          </div>

        </div>

    )
}
export default Header