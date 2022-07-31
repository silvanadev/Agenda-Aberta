import './menu.css'
import Logo from '../Logo/Logo'
import {Link} from 'react-router-dom'
import logo from '../../assets/agenda-aberta-logo.png'

function Menu() {
    return(
        <div className='menu-container'>
            <ul className='menu'>
                <li className='item'>
                    <Link className='link' to='/encontre'>Encontre um produto</Link>
                </li>
                <li className='item'>
                    <h1>|</h1>
                </li>
                <li className='item-logo'>
                    <Link className='link-logo' to='/'>
                    <Logo 
                        className="logo-logo"
                        logo={logo}
                    >
                    </Logo></Link>
                </li>
                <li className='item'>
                    <h1>|</h1>
                </li>
                <li className='item'>
                    <Link className='link' to='/acelere'>Acelere suas vendas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu