import {Navbar} from './HeaderStyled'

function Header() {
    return (
        <Navbar>
            <ul>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Portifolio</a></li>
                <li><a href='/'>Reference</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </Navbar>
    )
}

export default Header