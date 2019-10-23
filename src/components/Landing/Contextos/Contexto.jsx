import React from 'react';
import { Row, Col, Icon } from 'antd'

function Contexto() {
    return (
        <div className="landingPrecios">
            <Row type="flex" justify="space-around" align="middle" style={{ height: "100%" }}>
                <Col  lg={6} xll={6} xl={6} md={20} sm={24} xs={24} className="CardPrecios" >
                    <div id='article' className="estilo">
                        <h4> El contexto de las aplicaciones móviles (2019)</h4>


                        <ul>
                            <li className='contextos'> <Icon type="android" /> Hay aproximadamente 2.7 millones de aplicaciones en Google Play </li>
                            <li className='contextos'> <Icon type="apple" /> Aplicaciones para dispositivos apple hay 1.8 millones en AppStore</li>
                            <li className='contextos'> <Icon type="facebook" /> En Facebook hay 50 millones de paginas</li>
                            <li className='contextos'> <Icon type="ie" /> Paginas Web existentes hay 1700 millones</li>
                        </ul>

                        <p> Si nos detenemos para analizar la estrategia de fidelizar clientes y retener audiencia de las empresas nos damos cuenta que la mayoria concentra el esfuerzo en redes sociales para dar a conocer contenido dinamico, en su mayoria no tiene obtiene resultados organicos</p>
                        <p>Tener tu propia app permitirar captar la atencion hacia tu contenido.</p>
                    </div>
                </Col>
                <Col  lg={6} xll={6} xl={6} md={20} sm={24} xs={24} className="CardPrecios" >
                    <div id='article' className="estilo">
                        <h4>Contexto YouMagazine</h4>
                        <p>Somos una Empresa tecnologica que busca empoderar con tecnologia a otras empresas, simplificando el proceseso tecnologico de divulagación de contenido, dando como resultado a las empresas la fidelizacion de clientes y la captación de nuevos prospectos.</p>
                        <p><center><Icon type="heart" theme="twoTone" twoToneColor="#52c41a" className='corazon' /></center></p>
                        <p>Nuestro compromiso tambien es con el planeta y por cada nuevo cliente que se afilia donamos 10 arboles para ayudar al medio hambiente</p>
                    </div>
                </Col >


                <Col  lg={6} xll={6} xl={6} md={20} sm={24} xs={24} className="CardPrecios" >
                    <div id='article' className="estilo">
                        <h4>Contexto Profesional</h4>
                        <p>Nuestra tecnologia es Robusta, Rapida y Segura.</p>
                        <p>Utilizamos lenguajes de programación modernos lo cual permite escalar cada proyecto a los niveles necesarios de cada cliente.</p>
                        <p>Las aplicaciones NO son paginas web montadas, a diferencia de otros competidores el desarrollo de las aplicaciones son 100% nativas.</p>
                        <center><Icon type="like" style={{ fontSize: '5rem' }} theme="twoTone" /></center>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contexto;