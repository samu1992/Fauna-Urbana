import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Footer.css'

const Footer = () => {
  return (
    <div className="container_footer__legal">
      <div>
        <h3 id='title'>LEGAL</h3>
        <ul>
          <li>Nuestros Datos</li>
          <li>Terminos y Condiciones</li>
          <li>Politica de Cookies</li>
          <li>Politica de Privacidad</li>
          <li>Seleccionar Pais</li>
          <li id='container_footer__legal__6'>Reclamos</li>
        </ul>
      </div>
      <div>
        <h3 id='title'>PA</h3>
        <p>Proyecto Adoptame (PA)<br /> es una asociación civil<br />
          sin fines de lucro<br />
          abocada a difundir,<br />
          proteger y promover<br />
          los derechos de los<br />
          animales.</p>
      </div>
      <div className='container_footer__legal--form'>
        <h3 id='title'>MAILING PA</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Recibí las novedades en tu mail!</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            SUSCRIBIRME!
          </Button>
        </Form>
      </div>
      <div>
        <h3 id='title'>MENU</h3>
        <ul>
          <li>Inicio</li>
          <li>Contacto</li>
          <li>Donaciones</li>
          <li>Quienes Somos</li>
        </ul>
      </div>
      <div className='container_footer__legal__networks'>
        <h3 id='title'>SEGUINOS EN:</h3>
        <div className='container_footer__legal__networks--links'>
          <a href="."><i className=" fab fa-instagram"></i></a>
          <a href="."><i className=" fab fa-facebook"></i></a>
          <a href="."><i className=" fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  )
}
export default Footer
