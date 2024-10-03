import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProfileById } from '../../services/ProfileServices';

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

    return (
        <div>
            <div>
                <h3>TU INDICE DE MASA CORPORAL ES:</h3>
                <form>
                    <div className="modal-body" >
                        <div>
                            <label htmlFor="age" className="form__label">IMC</label>
                            <input type="text" step="0.01" className="form__input" id="age" defaultValue={data.weight / Math.pow(data.height / 100, 2)}></input>
                        </div>
                        <div>
                            <label htmlFor="genre" className="form__label">TU PESO IDEAL</label>
                            <input type="text" className="form__input" id="genre" defaultValue={data.height - 100 + ((data.age / 10) * 0.9)}></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Report
