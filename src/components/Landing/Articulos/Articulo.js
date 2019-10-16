import React from 'react';
import { Card,Tag,Icon } from 'antd';

let { Meta } = Card;

function Noticia({ noticia }){
    let { urlToImage, title,url, description, source } = noticia

    let imagen = (urlToImage) ?
        <div className='card-image'>
            <img src={urlToImage} alt={title} style={{width:'70%'}} />
        </div>
        : null

    return(
        <a href={url} target='_blank' rel="noopener noreferrer">
            <Card
            hoverable
            style={{ width:310}}
            cover={imagen}
          >
            <Meta title={title} description={<span><Tag color='geekblue'>@{source.name}</Tag></span>} />
            <p>{description}</p>
          </Card>
        </a>
    )
}


let Articulo=({articles})=>{
  
    {if(articles.noticias&&articles.noticias.length>0)
      return ( 
        <div className='articulosDetailFront'>
        {
          articles.noticias.splice(0,3).map(noticia=>(
          <Noticia
          key={noticia.url}
          noticia={noticia}
          />
        ))}
      </div>
     )
    else return <Icon type="loading" />}
}
 
export default Articulo;