import { useState , useEffect } from "react";
import {data} from "./data";

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
        <div>
            {jsonData.map((item) => {
                return (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>{item.edad}</p>
                        <p>{item.reascatado}</p>
                        <p>{item.foto}</p>
                        <p>{item.condicion}</p>
                    </div>
                )
            })}
        </div>
    )

};










export default Rescatados
