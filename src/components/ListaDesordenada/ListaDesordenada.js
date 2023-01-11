import './ListaDesordenada.css'

const ListaDesordenada = ({title="", listItems=[]}) => {
    return (
        <div className='container_lista'>
            <h5 className='container_lista--title'>{title}</h5>
            <ul className='lista_desordenada'>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>          
    )
}

export default ListaDesordenada