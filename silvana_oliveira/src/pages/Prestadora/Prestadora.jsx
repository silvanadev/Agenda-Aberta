import List from "./List";
import imagem1 from "../../assets/btn-instagram.svg"
import imagem2 from "../../assets/whatsapp.svg"
import imagem3 from "../../assets/sobre2.png"

import "./prestadora.css";

function Portifolio() {

  return (
    <>
        <div className="prestadora-container">
          <h1 className="prestadora-h2">Informações da Prestadora</h1>
          <div className="info-container">
              {List.map((prestadora) => {
                return (
                  <div className="lado1">
                    <div className="prestadora-info" key={prestadora.id}>
                      <h3 className="info-h3">{prestadora.nomeComercial}</h3>
                      <hr className="hr"/>
                      <h3 className="info-h3">{prestadora.nomePrestadora}</h3>
                      <hr className="hr"/>
                      <h3 className="info-h3">{prestadora.tipoServiço}</h3>
                    </div>
                    <div className="fotos">
                      <div className="container-foto">
                        <img 
                            className="foto"
                            src={prestadora.img1}
                            alt={"foto prestadora " + prestadora.nomePrestadora}
                          />
                          <img 
                            className="foto"
                            src={prestadora.img2}
                            alt={"foto prestadora " + prestadora.nomePrestadora}
                          />
                      </div>
                      
        </div>

                      
                
                      <div className="redes-container">
                        <h3 className="titulo-btn" >Entre em contato e faça seu orçamento</h3>
                        <div className="redes-sociais">
                          <a className="a" href={prestadora.link1} target="_blank">
                            <img className="instagram" src={imagem1} alt="" />
                          </a>
                          <a className="a" href={prestadora.link2} target="_blank">
                            <img className="whatsapp" src={imagem2} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                
              );
            })}
          </div>
        </div>
    </>
  );
}

export default Portifolio;