import "./header.css";
import seta from "../../assets/seta1.png"

function Header(props) {
  return (
    <section className="section-sobre">
      <div className='div-sobre'>
        <div className='container-1'>
            <h1 className='titulo'>{props.title}</h1>
            <p className='description'>{props.descrip}</p>
            <h2 className='subtitulo'>
              A
              <span className="span1"> Agenda </span>
              <span className="span2"> Aberta </span>
              ajudará empreendedoras em todo o Brasil
            </h2>
            <img className="seta" src={seta} alt="" />
        </div>
        <div className="container-img">
          <img
              className="image"
              src={props.imagem}
              alt={props.alt}
            />
        </div>
      </div>
    </section>
  );
}

export default Header;