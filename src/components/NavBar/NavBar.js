import './NavBar.css';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="container_nav">
            <Link to="/"><div className="container_nav--logo"></div></Link>
            <div className="container_nav--li">
                <div className='container_nav--input'>
                    <form><input type='search' placeholder='Busqueda' /></form>
                    <div className='container_nav_input--icon'><Link to='/'><i className="fa-solid fa-magnifying-glass"></i></Link></div>
                </div>
                <li><Link to='/QuienesSomos' className='container_nav--link'>Quienes Somos</Link></li>
                <li>Adopcion</li>
                <li>Donaciones</li>
                <li>Contacto</li>
            </div>
        </div>
    )
}


export default NavBar