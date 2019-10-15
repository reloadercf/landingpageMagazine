import React,{Fragment} from 'react';

import {Row, Col,Icon} from 'antd';

function Argumentos(){
    return (<Fragment>
        <h2>You Magazine es innovación en tus proyectos</h2>
                <Row type="flex" justify="space-around" align="middle"  className="fondo-estadisticas">
                    <Col xll={6} xl={6} md={12} sm={24} xs={24} className="colEstadisticas" >
                        <div className="contenedor_argumentos">
                            <Icon type="rocket"  className='iconnews_argumentos' />
                        </div>
                        <Row>
                            <Col span={24}>
                             <span><Icon type="arrow-right" /></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className='textcard_argumentos'>
                                <span> Haz contenido <strong>Viral</strong> con la identidad de tu <strong>marca</strong></span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xll={6} xl={6} md={12} sm={24} xs={24}  className="colEstadisticas">
                        <div className="contenedor_argumentos">
                        <Icon type="heat-map" className='iconnews_argumentos'/>
                        </div>
                        <Row>
                            <Col span={24}>
                                <span><Icon type="arrow-right" /></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className='textcard_argumentos'>
                                <span>Provoca <strong>Relevancia</strong> y <strong>Pertenencia</strong> a tus clientes</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xll={6} xl={6} md={12} sm={24} xs={24}  className="colEstadisticas">
                        <div className="contenedor_argumentos">
                            <Icon type="thunderbolt" className='iconnews_argumentos' />
                        </div>
                        <Row>
                            <Col span={24}>
                                <span><Icon type="arrow-right" /></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className='textcard_argumentos'>
                                <span>Genera contenido <strong>Rapido</strong> y difunde en <strong>Realtime</strong></span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xll={6} xl={6} md={12} sm={24} xs={24}  className="colEstadisticas">
                        <div className="contenedor_argumentos">
                        <Icon type="global" className='iconnews_argumentos' />
                        </div>
                        <Row>
                            <Col span={24}>
                                <span><Icon type="arrow-right" /></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className='textcard_argumentos'>
                                <span>Abandona el papel y <strong>Cuida</strong> el <strong>Planeta</strong></span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Fragment>
     
    );
};

export default Argumentos;