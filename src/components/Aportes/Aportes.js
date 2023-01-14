import './Aportes.css'

const Aportes = () => {
    return (
        <div className="container_aportes">
            <h2><strong>TU APORTE NOS AYUDA A SEGUIR SALVANDO VIDAS</strong></h2>
            <h6>Cada aporte por más pequeño que sea, significa mucho para ellos.</h6>
            <div className='container_aportes_tarjetas'>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--0"><h2><strong>CALENDARIO 2023</strong> CONSEGUILO AQUI</h2></div>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--1"><h2><strong>DONA</strong><br/>CON TARJETA DE CREDITO</h2></div>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--2"><h2><strong>DONA</strong><br/>INSUMOS</h2></div>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--3"><h2><strong>DONA</strong><br/>UNA CASTRACION</h2></div>
            </div>
        </div>
    )
}

export default Aportes