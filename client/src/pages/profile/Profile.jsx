import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProfileById } from '../../services/ProfileServices';
import { Link } from 'react-router-dom';

const Profile = () => {
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
            <h3>Bienvenido {data.name}, tu información es la siguiente:</h3>

            <div>
                <form>
                    <div >
                        <div>
                            <label htmlFor="age" className="form__label">Edad</label>
                            <input
                             type="text"
                             className="form__input"
                             id="age"
                             defaultValue={data.age}
                             disabled
                             />
                        </div>
                        <div>
                            <label htmlFor="genre" className="form__label">Sexo</label>
                            <input
                             type="text"
                             className="form__input"
                             id="genre"
                             defaultValue={data.genre}
                             disabled
                             />
                        </div>
                        <div>
                            <label htmlFor="weight" className="form__label">Peso en kg</label>
                            <input
                             type="text"
                             className="form__input"
                             id="weight"
                             defaultValue={data.weight}
                             disabled
                             />
                        </div>
                        <div>
                            <label htmlFor="height" className="form__label">Altura en cm</label>
                            <input
                             type="text"
                             className="form__input"
                             id="height"
                             defaultValue={data.height}
                             disabled
                             />
                        </div>
                        <div>
                        <Link to={`/editProfile/${id}`}><button className="form__button" >Actualizar información</button></Link>
                        <Link to={`/report/${id}`}><button className="form__button" >Ver reporte</button></Link>
                        </div>

                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Profile;