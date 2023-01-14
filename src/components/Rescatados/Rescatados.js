import { useState , useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import {data} from "./data.js";
import './Rescatados.css';


const Rescatados = () => {
    const [jsonData, setJsonData] = useState([]);

    const getDatos = new Promise((resolve, reject) => {
        resolve(data.length > 0 ? data : reject("No hay datos"));
    })

    useEffect(() => {
        getDatos
        .then((res)=> setJsonData(res))
        .catch((error)=> console.error(error))
        console.log(jsonData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container_rescatados">
            <div className="boton"><button><Link to='/Requisitos'>REQUISITOS</Link></button></div>
            {jsonData.map((item) => {
                return (
                    <div>
                        <Card className="container_rescatados--card" key={item.id}>
                            <Card.Img className="img" variant="top" src={item.foto} />
                            <Card.Body>
                                <Card.Title id="title"><strong>{item.nombre}</strong></Card.Title>
                                <Card.Title id="title"><strong>Edad:</strong> {item.edad}</Card.Title>
                                <Card.Title id="title"><strong>Rescatado en:</strong> {item.rescatado}</Card.Title>
                                <button>Adoptar</button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )

};










export default Rescatados
