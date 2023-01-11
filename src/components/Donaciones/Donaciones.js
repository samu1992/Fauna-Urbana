import './Donaciones.css'
import Pagos from './pagos.png'

const Donaciones = () => {
    return (
        <div className='container_donaciones'>
            <div className='container_donaciones--contenido'>
                <h3>Tu aporte nos permite continuar llevando a cabo actividades sanitarias, educativas y de asistencialismo.</h3>
                <p id='p'>Los aportes económicos son importantes para pagar tratamientos, estudios médicos y honorarios veterinarios,
                    comprar insumos y alimento, financiar campañas de castración en zonas carenciadas, imprimir material de
                    difusión entre otros.</p>
                <div className='container_donaciones_contenido--cuentas'>
                    <div className='cuenta_bancaria'>
                        <h4>Depósito o transferencia Bancaria</h4>
                        <p>(Doná el importe que quieras directamente en nuestra cuenta.)</p>
                        <p>Banco XXXXXX</p>
                        <p>Asociación Civil FAUNA<br />
                            Cuenta Corriente en pesos Nº 578544/8<br />
                            Sucursal Nº: 05002 - San-Vicente<br />
                            CBU: 0125796321478563245615<br />
                            CUIT: 30-763547896-3<br />
                            Alias: PROYECTO-FAUNA</p>
                    </div>
                    <div className='debito_automatico'>
                        <h4>Por Débito Automático</h4>
                        <p>(Doná el importe que quieras directamente en nuestra cuenta.)</p>
                        <p>Banco XXXXXX</p>
                        <p>Asociación Civil FAUNA<br /></p>
                        <img alt='img' src={Pagos} />
                        <button>DONA CON DEBITO AUTOMATICO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donaciones