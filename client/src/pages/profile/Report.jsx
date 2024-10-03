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

    return (
        <div className="title"> 
                <h3>Tu reporte es el siguiente:</h3>
            <div className="content">
                <form>
                    <div className="form">
                        <div>
                            <label htmlFor="age" className="label">Indice de masa corporal</label>
                            <input
                             type="text"
                             step="0.01"
                             className="input"
                             id="age"
                             defaultValue={bmi}
                             disabled/>
                            <p className='text'> Descripción:  {bmiDescription} </p>
                        </div>
                        
                        <div>
                            <label htmlFor="genre" className="label">Tu peso ideal en kilogramos</label>
                            <input 
                             type="text"
                             className="input"
                             defaultValue={data.height - 100 + ((data.age / 10) * 0.9)}
                             disabled/>
                        </div>
                        <div>
                            <label htmlFor="genre" className="label">Tu cantidad de pasos ({data.age}) equivale a: </label>
                            <input 
                             type="text"
                             className="input"
                             defaultValue={data.height - 100 + ((data.age / 10) * 0.9)}
                             disabled/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Report
