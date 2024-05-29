import { StrictMode } from 'react'
import Badge from '../Badge/Badge';

function Card (datosCard) {
    const title = datosCard.titulo;
    const url = datosCard.urlPagina;
    const style = {
        backgroundImage: `url(${datosCard.urlPortada})`
    };
    const description = datosCard.descripcion;
    const badgesArray = datosCard.badges;
  return (
    <StrictMode>
    <div className="card">
            <a href={url} className="no-class">
              <div className="content">
                <div className="back" style={style}></div>
                <div className="front" style={style}>
                  <div className="descripcion">
                    <h2 className="card-titulo">{title}</h2>
                    <h3>
                        {description}
                    </h3>
                    <footer className="card-footer">
                      <Badge array={badgesArray}></Badge>
                    </footer>
                  </div>
                </div>
              </div>
            </a>
          </div>
    </StrictMode>
  )
}

export default Card