import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="container_nav">
            <Link to="/"><div className="container_nav--logo"></div></Link>
            <div className="container_nav--li">
                <div className='container_nav--input'>
                    <form><input type='search' placeholder='Busqueda' /></form>
                    <div className='container_nav_input--icon'><Link to='/'><i className="fa-solid fa-magnifying-glass"></i></Link></div>
                </div>
                <li><Link  to='/QuienesSomos' className='container_nav--link'>Quienes Somos</Link></li>
                <li><Link to='/Rescatados' className='container_nav--link desplegar'>Adopcion</Link></li>
                <div className='menu_desplegable'><Link to='/Requisitos' className='requisitos'>Requisitos Adopcion</Link></div>
                <li><Link to='./Donaciones' className='container_nav--link'>Donaciones</Link></li>
                <li><Link to='./Castracion' className='container_nav--link castracion'>Salva Vidas</Link></li>
                <div className='menu_desplegable' id='castracion'><Link to='/Castracion' className='requisitos'>Castracion</Link></div>
                <li><Link className='container_nav--link'>Contacto</Link></li>

            </div>
        </div>
    )
}


export default NavBar