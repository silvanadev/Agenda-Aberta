import "./outra.css";
import sobre2 from "../../assets/sobre2.png"
import baixar from "../../assets/googleplay.png"
import baixar2 from "../../assets/appstore.png"
import {Link} from 'react-router-dom'

function Outra(props) {
  return (
    <>
    
      <div className="verde">
        <section className="section-sobre2">
          <div className='div-sobre2'>
            <div className="container-img2">
              <img
                  className="image2"
                  src={sobre2}
                  alt="celular com dados" 
                />
            </div>
            <div className='container-2'>
                <h1 className='titulo2'>{props.title}</h1>
                <p className='description2'>{props.descrip}</p>
                <div className="btn-container">
                <Link className='link' to='/acelere'>
                  <button className="btn" type="button">ACELERE SEU NEGÓCIO</button>
                </Link>
                </div>
                <div className="container-subtitulo2" >
                  <h2 className='subtitulo2'>{props.title2}</h2>
                  <div className="container-baixar">
                    <img className="baixar" src={baixar} alt="" />
                    <img className="baixar" src={baixar2} alt="" />
                  </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Outra;