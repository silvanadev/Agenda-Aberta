import Header from "../../components/Header/Header"
import Outra from "../../components/Outra/Outra"
import imagem from "../../assets/shopping.png"
import './sobre.css'

function Sobre() {
    return(
        <>
            <Header
                imagem={imagem}
                title="Acelerador de vendas"
                descrip="A plataforma é uma
                iniciativa independente com o intuito de
                auxiliar mulheres autônomas a alavancar
                o sucesso de suas vendas."
            >
            </Header>
            <Outra
                title="Aumente seu alcance"
                descrip="O nosso objetivo é que as
                donas de pequenos negócios tenham um
                espaço para divulgar seus produtos,
                serviços e ampliar suas parcerias.
                Esta plataforma digital funciona de
                forma gratuita e exclusiva para empresas
                com gestão feminina."
                title2="Feito por mulheres para mulheres
                "
            >     
            </Outra>
        </>
    )
}

export default Sobre