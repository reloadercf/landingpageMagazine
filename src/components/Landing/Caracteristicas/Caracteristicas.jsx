import React from 'react'
import { Card, Icon, Row, Col, Button } from 'antd';


const Caracteristicas = () => {
    return (
        <div className='padreCARACTERISTICAS'>
            <Row>
                <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                    <div className='caracteristicasContent'>
                        <h2>Caracterisiticas</h2>
                        <p>Tenemos una solución para gestionar todo el contenido y herramientas que se adaptan a tu negocio y te permitan seguir creciendo</p>
                        <div className='contenedorBoton'><Button className='botonVideo'>Ver Video <Icon type="play-circle" /></Button></div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={16} xl={16} >
                    <Row type="flex" justify="space-around" align="middle">
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className="one" >
                            <h3>App Móvil <Icon type="tablet" /></h3>
                            <p>Tu marca con una App funcional en <Icon type="android" /> <Icon type="apple" /><Icon type="chrome" /></p>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className='two'>
                            <h3>Crear y Compartir <Icon type="file-protect" /></h3>
                            <p>Gestiona el contenido y permite que sea viral</p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle" >
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className='three' >
                            <h3>Estadistica <Icon type="area-chart" /></h3>
                            <p>Analiza todos los resultados de las publicaciones</p>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className='four'>
                            <h3>Sponsor <Icon type="rocket" /></h3>
                            <p>Controla la publicidad de tus patrocinadores</p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className='five' >
                            <h3>Usuarios <Icon type="tool" /></h3>
                            <p>Administra los diferentes roles para asignar tareas</p>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className='six'>
                            <h3>Video <Icon type="play-square" /></h3>
                            <p>Incorpora video para aumentar tu audiencia y generando tendencia</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Caracteristicas;