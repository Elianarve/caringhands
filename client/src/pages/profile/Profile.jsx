import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { createProfile, getProfileById } from '../../services/ProfileServices';

const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        sex: '',
        height: ''
    });

    useEffect(() => {
        if (id) {
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
        } else {
            setIsLoading(false);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProfile(formData);
            alert('Perfil creado exitosamente');
            navigate(`/profile/${id}`);
        } catch (error) {
            setError(error);
            console.error("Error al crear el perfil", error);
        }
    };

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {id ? (
                <div>
                    <h1>Perfil de {data.name}</h1>
                    <p>Email: {data.email}</p>
                    <p>Edad: {data.age}</p>
                    <p>Peso: {data.weight}</p>
                    <p>Sexo: {data.sex}</p>
                    <p>Altura: {data.height}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Edad:</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Peso:</label>
                        <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Sexo:</label>
                        <input type="text" name="sex" value={formData.sex} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Altura:</label>
                        <input type="number" name="height" value={formData.height} onChange={handleChange} required />
                    </div>
                    <button type="submit">Crear Perfil</button>
                </form>
            )}
        </div>
    );
};

export default Profile;