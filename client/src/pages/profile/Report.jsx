import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProfileById } from '../../services/ProfileServices';
import '../../pages/profile/Profile.css';

const Report = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await getProfileById(id);
                setData(data);
            } catch (error) {
                setError(error);
                console.error("Error al obtener datos del usuario", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Cargando perfil...</div>;
    }
    if (error) {
        return <div>Error al cargar el perfil: {error.message}</div>;
    }

    const bmi = Math.round(data.weight / Math.pow(data.height / 100, 2));

    let bmiDescription = "";

    if (bmi < 18.5) {
        bmiDescription = "Bajo Peso";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiDescription = "Adecuado";
    } else if (bmi >= 25 && bmi < 30) {
        bmiDescription = "Sobrepeso";
    } else {
        bmiDescription = "Obesidad";
    }

    const iwr = data.height - 100 + ((data.age / 10) * 0.9); //fORMULA DE PERRAULT DRY "RANGO DE PESO IDEAL"

    let iwrDescription = "";

    if (data.weight < iwr) {
        iwrDescription = "Procura aumentar de peso";
    } else if (data.weight = iwr) {
        iwrDescription = "Peso adecuado";
    } else {
        iwrDescription = "Procura disminuir de peso";
    }

    return (
        <div className="title">
            <h3>Tu reporte es el siguiente:</h3>
            <div className="content">
                <form>
                    <div className="form">
                        <div>
                            <label htmlFor="age" className="label">Índice de masa corporal</label>
                            <input
                                type="text"
                                step="0.01"
                                className="input"
                                id="age"
                                defaultValue={bmi}
                                disabled />
                            <p className='text'> Descripción:  {bmiDescription} </p>
                        </div>

                        <div>
                            <label htmlFor="genre" className="label">Tu peso ideal en kilogramos</label>
                            <input
                                type="text"
                                className="input"
                                defaultValue={iwr}
                                disabled />
                            <p className='text'> Descripción:  {iwrDescription} </p>
                        </div>
                        <div>
                            <label htmlFor="genre" className="label">Por {data.steps} pasos realizados lograste: </label>
                            <div>
                                <div className="subcontent">
                                <input
                                    type="text"
                                    className="subinput"
                                    defaultValue={Math.round(data.steps * 0.687 / 1000)} //0.687 es la longitud media de un paso de un humano adulto
                                    disabled />
                                <label htmlFor="genre" className="sublabel">kilometros recorridos </label>
                                </div>
                                <div className="subcontent">
                                <input
                                    type="text"
                                    className="subinput"
                                    defaultValue={Math.round(data.steps * 0.687 * data.weight / 1000)}
                                    disabled />
                                <label htmlFor="genre" className="sublabel"> calorias quemadas </label>
                                </div>
                                <div className="subcontent">
                                <input
                                    type="text"
                                    className="subinput"
                                    defaultValue={Math.round(data.steps * 0.687 / 10000 * 50 / 100)}
                                    disabled />
                                <label htmlFor="genre" className="sublabel"> puntos logrados </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Report
