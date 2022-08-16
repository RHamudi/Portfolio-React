import {Navbar} from './HeaderStyled'
import {Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar>
            <ul>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/portifolio">Portifolio</Link></li>
                <li><Link to={"/contatos"}>Contatos</Link></li>
            </ul>
        </Navbar>
    )
}

export default Header