import React,{useEffect,useState} from 'react'
import Articulo from './Articulo'

function Articulos (){

  let stateInicial = {
    noticias: []
  }

  let [articles,guardarArticle]=useState(stateInicial)

  let consultarAPI = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=0285998a7c0c4d59a4d98f7f55361c5f`
    let respuesta = await fetch(url)
    let noticias = await respuesta.json()
    guardarArticle({ noticias: noticias.articles })
  }

  useEffect(
    ()=>{
      consultarAPI()
    },[]
  )


    return ( 
       <Articulo
       articles={articles}
       />
     );
}
 
export default Articulos;