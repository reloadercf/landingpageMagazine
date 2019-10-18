import React from 'react';
import {Row,Col,Icon} from 'antd';


function CardBeneficios() {
    return (
        <Row type="flex" justify="space-around" align="middle" className="rowBeneficios">
            <Col xxl={18} xl={18} md={18} sm={24} xs={24} className="Col-CardBeneficio" >
                <div className="content">
                    <h3>El contenido eficiente es el Futuro de tu Sector <Icon type="rise" style={{fontSize:'2rem'}} /></h3>
                        <p><Icon type="like" /> Convierte el valor de la información en fidelización de clietes hacia tu Marca</p>
                        <p><Icon type="mobile" /> Actualmente el 80% del <strong>uso global</strong> de Internet es desde Smartphones</p>
                        <p><Icon type="pie-chart" /> Las personas destinan en promedio el <strong>69% de su tiempo</strong> en medios Digitales</p>
                        <p><Icon type="alert" /> Tu competencia esta pensando implementar una app móvil para ser más competitivo</p>
                </div>
            </Col>
            <Col xxl={6} xl={6} md={6} sm={24} xs={24} className="col-imagen_beneficio" >
            <Icon type="dashboard"  style={{fontSize:'9rem', color:'#fff'}} className="Imagen-beneficio" />
            </Col>
        </Row>
    );
};

let Beneficios =()=> {
    return (
        <div className="landingBeneficios">
         
            <Row type="flex" justify="space-around" align="middle" >
                <Col xll={24} xl={24} md={24} sm={24} xs={24}>
                    <h2 align="center"><Icon type="question" rotate={180} />Por qué una APP se adapta a mi estrategia Digital<Icon type="question" /> </h2>
                </Col>
            </Row>
            <CardBeneficios/>
        </div>


    );
};

export default Beneficios;