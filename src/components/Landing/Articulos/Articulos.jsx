import React from 'react'
import { Card,Tag } from 'antd';

let { Meta } = Card;

const Articulos = () => {
    return ( 
        <div className='articulosDetailFront'>
          <Card
              hoverable
              style={{ width:310}}
              cover={<img src="http://sarfarazshaikh.com/wp-content/uploads/2017/08/team.jpg" alt='Article imagen'/>}
            >
              <Meta title="YouMagazine como tu estrategia digital" description={<span><Tag color='geekblue'>Palabra Clave</Tag><Tag color='geekblue'>Palabra Clave 2</Tag></span>} />
            </Card>
            
          <Card
              hoverable
              style={{ width:310}}
              cover={<img src="http://sarfarazshaikh.com/wp-content/uploads/2017/08/team.jpg" alt='Article imagen'/>}
            >
              <Meta title="YouMagazine como tu estrategia digital" description={<span><Tag color='geekblue'>Palabra Clave</Tag><Tag color='geekblue'>Palabra Clave 2</Tag></span>} />
            </Card>
            
          <Card
              hoverable
              style={{ width:310}}
              cover={<img src="http://sarfarazshaikh.com/wp-content/uploads/2017/08/team.jpg" alt='Article imagen'/>}
            >
              <Meta title="YouMagazine como tu estrategia digital" description={<span><Tag color='geekblue'>Palabra Clave</Tag><Tag color='geekblue'>Palabra Clave 2</Tag></span>} />
            </Card>
        </div>
     );
}
 
export default Articulos;