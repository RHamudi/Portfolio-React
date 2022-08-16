import {Navbar} from './HeaderStyled'
import {Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Header() {
    return (
        <Navbar>
            <ul>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/portifolio">Portifolio</Link></li>
                <li><Link to={<Footer/>}>Contatos</Link></li>
            </ul>
        </Navbar>
    )
}

export default Header