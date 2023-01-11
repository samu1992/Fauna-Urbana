import './Contacto.css'

const Contacto = () => {
    return (
        <div className="container_contacto">
            <div className="container_contacto--title">
                <h1><span>Contacto</span></h1>
                <p>Para contactarse con nosotros complete el siguiente formulario y seleccione el área a donde quiere<br/> dirigirse. Muchas gracias.</p>
            </div>
            <div className='container_contacto--formulario'>
                <form>
                    <p>Nombre y Apellido</p>
                    <input type="text" name="nombre" size='40' />
                    <p>Ciudad</p>
                    <input type='text' name='ciudad' size='40' />
                    <p>E-mail</p>
                    <input type='email' size='40' />
                    <p>Telefono</p>
                    <input type='text' size='40' />
                    <p>Area de Contacto</p>
                    <select>
                        <option value="1">General</option>
                        <option value="2">Donaciones</option>
                        <option value="3">Adopciones</option>
                        <option value="4">Voluntarios</option>
                    </select><br/>
                    <p>Mensaje</p>
                    <textarea></textarea><br/>
                    <button>ENVIAR</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto