import React from 'react'

import { Card, Row, Col, Slider, Popover, Icon, Select, Switch, Input, Button } from 'antd';

let { Option } = Select;

const Cotizador = () => {

    let publicaciones = (
        <div>
            <p>Texto para rellenar este hueco</p>
        </div>
    );

    return (
        <div className='contenedorCotizador'>
            <Card title="Cotiza" bordered={false} className='cardCotizador'>
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}><Popover content={publicaciones} title="Las Publicaciones Mensuales"><Icon type="question-circle" /></Popover> Publicaciones Mensuales:
                 <Slider defaultValue={30} />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Popover content={publicaciones} title="Tecnologías disponibles"><Icon type="question-circle" /></Popover> Tecnologías:
                <Select
                            mode="multiple"
                            size='default'
                            placeholder="Seleccione la tecnología"
                            style={{ width: '100%' }}
                        >
                            <Option key='android'><Icon type="android" />Android</Option>
                            <Option key='IOs'><Icon type="apple" />IOs</Option>
                            <Option key='Web'><Icon type="global" />Web</Option>
                        </Select>
                    </Col>
                </Row>

                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} md={8} lg={6}><Popover content={publicaciones} title="Estadistica"><Icon type="question-circle" /></Popover> Estadistica: <p><Switch defaultChecked /></p></Col>
                    <Col xs={24} sm={24} md={8} lg={8}><Popover content={publicaciones} title="Patrocinadores"><Icon type="question-circle" /></Popover> Patrocinadores: <p><Switch defaultChecked /></p></Col>
                    <Col xs={24} sm={24} md={8} lg={10}><Popover content={publicaciones} title="Registro y autenticacion de usuarios"><Icon type="question-circle" /></Popover> Registro e Inicio de sesión: <p><Switch defaultChecked /></p></Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={12}><Popover content={publicaciones} title="Multiples usuarios"><Icon type="question-circle" /></Popover> Numero de Usuarios:
                    <Slider defaultValue={30} />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={12}>
                        <Popover content={publicaciones} title="Otras funciones"><Icon type="question-circle" /></Popover> Me gustaria tener otras Funciones: <p><Switch /></p>
                    </Col>
                </Row>
                <hr />
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} md={12} lg={9} >
                        <Popover content={publicaciones} title="Seleccione la forma de Pago"><Icon type="question-circle" /></Popover> Forma de Pago:
                    <p>
                            <Select
                                style={{ width: 140 }}
                                placeholder="Seleccione la Forma de pago"
                            >
                                <Option value="Mensual">Mensual</Option>
                                <Option value="Anual">Anual</Option>
                            </Select>
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={14} >
                        <Popover content={publicaciones} title="Codigos de Descuento"><Icon type="question-circle" /></Popover> Introdusca código de descuento:
                    <p>
                            <Row>
                                <Col xs={14} sm={14} md={14} lg={18}>
                                    <Input placeholder="Codigo de Descuento" />
                                </Col>
                            </Row>
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Button type="primary" block>
                        Cotizar
                    </Button>
                </Row>
            </Card>
        </div >
    );
}

export default Cotizador;