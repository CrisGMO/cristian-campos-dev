import React, { StrictMode, useState } from "react";
import ReactDOM from 'react-dom/client';
import lang from './lang.json'



const rootBarra = ReactDOM.createRoot(document.getElementById("barra-navegacion"));
const rootPresentacion = ReactDOM.createRoot(document.getElementById('presentacion'));
const rootPortafolio = ReactDOM.createRoot(document.getElementById("portafolio"));
console.log(lang);

var langActual = '';
langActual = localStorage.getItem('clave') != null ? localStorage.getItem('clave') : localStorage.setItem('lang', 'es');
console.log(langActual)
const trad = langActual == 'en'? lang.en : lang.es ;
console.log(trad);


// rootBarra.render(
//     <StrictMode>
//             <nav className="barra-navegacion">
//                 <div className="barra-opciones">
//                     <a className="" href="index.html">{trad.principal.home}</a>
//                     <a className="" href="projects-grid-cards.html">{trad.principal.proyectos}</a>
//                     <a className="" href="cv.html">{trad.principal.cv}</a>
//                     <a className="" href="hire-me.html">{trad.principal.hire}</a>
//                 </div>
//                 <div className="barra-idioma">
//                 <select onChange={(e) => cambiarIdioma(e.target.value)}>
//                     <option value="es">es</option>
//                     <option value="en">en</option>
//                 </select>
//                 </div>
//             </nav>
//     </StrictMode>
// )

// rootPresentacion.render(
//     <StrictMode>
//         <section className="carta-presentacion">
//             <div className="">
//                 <p>{trad.presentacion.saludoInicio}</p>
//                 <strong>{ lang.datos.nombre} {lang.datos.apellido}. </strong>
//                 <p>{trad.presentacion.saludoMedio}</p>
//                 <p>{trad.presentacion.saludoFinal}</p>
//             </div>
//         </section>
//         <section className="">
//             <div class="seccion-imagen">
//                 <img class="img-perfil" src="./src/imgCC.jpg"></img>
//             </div>
//         </section>
//     </StrictMode>
// )

rootPortafolio.render(
    <StrictMode>
        <section className="">
            <div className="">
                <div className="">
                    <h2>{trad.presentacion.portfolio}</h2>
                </div>
                <div className="">
                    <div className="">
                        <div className="">
                            <div className=""><i className=""></i></div>
                            <div className="">
                                <h3 className="">Web Design</h3>
                                <p className="">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className=""><i className=""></i></div>
                            <div className="">
                                <h3 className="">Interface Design</h3>
                                <p className="">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className=""><i className =""></i></div>
                            <div className="">
                                <h3 className="card-title">Photography and Print</h3>
                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </StrictMode>
)

function cambiarIdioma(nuevo) {
    localStorage.setItem('lang', nuevo)
    window.location.reload();    
}