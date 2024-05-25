import React, { StrictMode, useState } from "react";
import ReactDOM from 'react-dom/client';
import lang from './lang.json';
import Slider from './Components/Slider/Slider'
import { Analytics } from "@vercel/analytics/react"

var langActual = '';
langActual = localStorage.getItem('clave') != null ? localStorage.getItem('clave') : localStorage.setItem('lang', 'es');
const trad = langActual == 'en'? lang.en : lang.es ;

const rootConocimientos = ReactDOM.createRoot(document.getElementById('conocimientos'));
rootConocimientos.render(
    <StrictMode>
        <Slider></Slider>
        <Analytics></Analytics>
    </StrictMode>
)

function cambiarIdioma(nuevo) {
    localStorage.setItem('lang', nuevo)
    window.location.reload();    
}

function duplicarComponente() {
    const nuevoComponente = React.cloneElement(copy);
    document.getElementById('conocimientos').appendChild(nuevoComponente);
  };