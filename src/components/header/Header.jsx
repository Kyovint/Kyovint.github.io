import './header.css'
import logo from '../../assets/Header/icon.png';

export function Header () {
    return (
        <header className="h-header">
            <img src={logo} alt="Logo" className='icon-header' />
            <nav className='nav-header'>
                <a href="/css/">Skills</a>
                <a href="/html/">Career</a>
                <a href="/js/">Studies</a>
            </nav>
        </header>
    )
}