import "./encontre.css";
import React from 'react'
import carrinho from "../../assets/carrinho.svg"
import {Link} from 'react-router-dom'

function Encontre(props) {

  return (
    <>
      <div className="container-encontre">
        <input className="input-encontre" placeholder="Pesquise seu produto/serviço" type="search" name="" id="" />
        <div className="container-button">
        <Link className='link' to='/prestadora'>
          <button className="btn-encontre">Buscar</button>
        </Link> 
        </div>
        <div className="carrinho">
          <img className="carrinho-dentro" src={carrinho} alt="" />
        </div>
        <div className="caixa-mensagem">
          <p className="titulo-mensagem">Ao consumir produtos/serviços dessa plataforma você contribuirá para a economia de um lar gerido por uma mulher!</p>
        </div>
      </div>
    </>
  );
}

export default Encontre;