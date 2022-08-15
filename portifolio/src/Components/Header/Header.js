import {Navbar} from './HeaderStyled'
import {Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/portifolio">Portifolio</Link></li>
                <li><a href='/'>Reference</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </Navbar>
    )
}

export default Header