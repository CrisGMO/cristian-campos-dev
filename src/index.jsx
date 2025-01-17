import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
// import Slider from './Components/Slider/Slider'
import { Analytics } from "@vercel/analytics/react"
import Card from "./Components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import conocimientos from "./Components/Slider/conocimientos.json"
import Slide from "./Components/Slide/Slide";
import ContinuousCarousel from "./Components/Slider/ContinuousCarousel";

// var langActual = '';
// langActual = localStorage.getItem('clave') != null ? localStorage.getItem('clave') : localStorage.setItem('lang', 'es');
// const trad = langActual == 'en'? lang.en : lang.es ;

const rootConocimientos = ReactDOM.createRoot(document.getElementById('conocimientos'));
rootConocimientos.render(
    <StrictMode>
        <ContinuousCarousel tecnologias={conocimientos}/>
        <Analytics></Analytics>
    </StrictMode>
)

const datosCard1 = {
    titulo:'Bebidas Lab!',
    urlPagina:'https://bebidas-lab.vercel.app/',
    urlPortada:'https://i.imgur.com/g4ulmh5.png',
    descripcion:`Un recetario de bebidas de todo tipo, implementado en SPA, apoyandose en la
    API de TheCocktailDB`,
    badges:['HTML','JS','React JS','CSS','API consume']
}

const datosCard2 = {
    titulo: 'fotoAPI',
    urlPagina: 'https://foto-api.vercel.app/api/fotos',
    urlPortada: 'https://i.imgur.com/2gGN89r.png',
    descripcion: 'Desarrollandose como proyecto personal y laboral, se construyo esta API bajo los fundamentos MVC. Esta misma da soporte a una aplicacion que permite proyectar imagenes que las personas suben a traves de un qr durante un evento',
    badges: ['HTML', 'JS', 'Node JS', 'Express', 'PostgresSQL', 'MVC']
}

const datosCard3 = {
    titulo: 'Natch Arquictura',
    urlPagina: 'https://arquitecturanatch.online',
    urlPortada: 'https://i.imgur.com/tDjpvwV.png',
    descripcion: 'Landing SPA para los servicios de un estudio de arquitectura. En progreso.',
    badges: ['HTML','JS','React JS','CSS']
}

const rootCards = ReactDOM.createRoot(document.getElementById('grid-card'));
rootCards.render(
    <StrictMode>
        <Card {...datosCard1}></Card>
        <Card {...datosCard2}></Card>
        <Card {...datosCard3}></Card>
    </StrictMode>
)

function cambiarIdioma(nuevo) {
    localStorage.setItem('lang', nuevo)
    window.location.reload();    
}

function duplicarComponente() {
    const nuevoComponente = React.cloneElement(copy);
    document.getElementById('conocimientos').appendChild(nuevoComponente);
  }