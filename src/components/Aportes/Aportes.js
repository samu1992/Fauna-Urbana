import './Aportes.css'

const Aportes = () => {
    return (
        <div className="container_aportes">
            <h2>Tu aporte nos ayuda a seguir salvando vidas</h2>
            <h6>Cada aporte por más pequeño que sea, significa mucho para ellos.</h6>
            <di className='container_aportes_tarjetas'>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--0"><h2><strong>CALENDARIO 2023</strong> CONSEGUILO AQUI</h2></div>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--1"><h2><strong>DONA</strong><br/>CON TARJETA DE CREDITO</h2></div>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--2"><h2><strong>DONA</strong><br/>INSUMOS</h2></div>
                <div className="container_aportes_tarjetas--tarjeta tarjeta--3"><h2><strong>DONA</strong><br/>UNA CASTRACION</h2></div>
            </di>
        </div>
    )
}

export default Aportes