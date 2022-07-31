import "./acelere.css"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'


const schema = yup.object({
    tipo: yup.string().required("Tipo obrigatório"),
    nome: yup.string().required("Nome obrigatório"),
    endereco: yup.string().required("Endereço obrigatório"),
    celular: yup.string().min(11, "Digite um número com 11 digitos").required("Celular obrigatório"),
    link: yup.string().min(27, "Digite um link válido"),
    email: yup.string().email("Digite um email válido").required("Email obrigatório"),
    senha: yup.string().min(8, "A senha deve ter pelo menos 8 digitos").required("Senha obrigatória"),
    confirmarSenha: yup.string().required("Confirmação obrigatória").oneOf([yup.ref("senha")], "As senhas devem ser iguais"),
  }).required();

function Acelere() {

    const { 
        register,
        handleSubmit,
        watch,
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(watch("nome"));

    function onSubmit(userData){
        axios.post()
    }

    return(
        <>
            <div className="container">
                <div className="container-titulo">
                    <p>Cadastre-se aqui e acelere suas vendas</p>
                </div>
                <div className="container-form" >
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="macro">
                            <div className="form1">
                                <label className="label">
                                    Nome Comercial
                                    <input className="input" type="text" placeholder="Digite o nome comercial" {...register("nomeComercial")}/>
                                </label>

                                <label className="label">
                                    Tipo de serviço
                                    <input className="input" type="text" placeholder="Digite o tipo do serviço" {...register("tipo")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.tipo?.message}</span> }
                                </label>

                                <label className="label">
                                    Nome
                                    <input className="input" type="text" placeholder="Nome completo" {...register("nome", { required: true })}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.nome?.message}</span> }
                                </label>

                                <label className="label">
                                    Endereço
                                    <input className="input" type="text" placeholder="Endereço completo" {...register("endereco")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.endereco?.message}</span> }
                                </label>

                                <label className="label">
                                    Celular/Whatsapp
                                    <input className="input" type="tel" placeholder="(11)99999-9999" {...register("celular")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.celular?.message}</span> }
                                </label>
                            </div>
                            
                            <div className="form2">
                                <label className="label">
                                    Telefone Fixo
                                    <input className="input" type="tel" placeholder="(11)9999-9999" {...register("celular")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.celular?.message}</span> }
                                </label>

                                <label className="label">
                                    Link instagram
                                    <input className="input" type="text" placeholder="Cole o caminho do seu instagram" {...register("link")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.link?.message}</span> }
                                </label>

                                <label className="label">
                                    Email
                                    <input className="input" type="text" placeholder="exemplo@exemplo.com.br" {...register("email")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.email?.message}</span> }
                                </label>

                                <label className="label">
                                    Senha
                                    <input className="input" type="password" placeholder="Digite uma senha de 8 digitos" {...register("senha")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.senha?.message}</span> }
                                </label>

                                <label className="label">
                                    Confirmar Senha
                                    <input className="input" type="password" placeholder="Confirme a senha" {...register("confirmarSenha")}/>
                                    {errors.nome &&
                                    <span className="span" >{errors.confirmarSenha?.message}</span> }
                                </label>
                            </div>
                        </div>
                        <div className="final">
                            <button className="btn-acelere" type="submit" >Acelerar</button>
                        </div>
                        

                            


                    </form>
                </div>
            </div>
        </>
    )
}

export default Acelere