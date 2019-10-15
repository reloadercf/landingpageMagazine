import React from 'react'
import { Card,Icon,Row, Col, Button } from 'antd';


const Caracteristicas = () => {
    return ( 
        <div className='padreCARACTERISTICAS'>
            <Row>
      <Col span={7}>
          <div className='caracteristicasContent'>
          <h2>Caracterisiticas</h2>
          <p>Tenemos una solución para gestionar todo el contenido y herramientas que se adaptan a tu negocio y te permitan seguir creciendo</p>
          <div className='contenedorBoton'><Button className='botonVideo'>Ver Video <Icon type="play-circle" /></Button></div>
          </div>
      </Col>
      <Col span={17}>
        <Row gutter={16}>
        <Col span={12} >
            <Card className='one'>
                <h3>App Móvil <Icon type="tablet" /></h3>
                <p>Tu marca con una App funcional en <Icon type="android" /> <Icon type="apple" /><Icon type="chrome" /></p>
            </Card>
            <Card className='three'>
                <h3>Estadistica <Icon type="area-chart" /></h3>
                <p>Analiza todos los resultados de las publicaciones</p>
            </Card>
            <Card className='five'>
            <h3>Usuarios <Icon type="tool" /></h3>
                <p>Administra los diferentes roles para asignar tareas</p>
            </Card>
            </Col>
        <Col span={12} >
            <Card className='two'>
                <h3>Crear y Compartir <Icon type="file-protect" /></h3>
                <p>Gestiona el contenido y permite que sea viral</p>
                
            </Card>
            <Card className='four'>
                <h3>Sponsor <Icon type="rocket" /></h3>
                <p>Controla la publicidad de tus patrocinadores</p>
            </Card>
            <Card className='six'>
                <h3>Video <Icon type="play-square" /></h3>
                <p>Incorpora video para aumentar tu audiencia y generando tendencia</p>
            </Card>
        </Col>
        </Row>
            </Col>
    </Row>
        </div>
     );
}
 
export default Caracteristicas;