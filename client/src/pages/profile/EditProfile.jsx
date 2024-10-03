import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getProfileById, updateProfile } from '../../services/ProfileServices';

const EditProfile = () => {
    const { id } = useParams();
    const [data, setData] = useState('');
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProfileById(id);
                setData(data);
                setValue('name', data.name)
                setValue('email', data.email)
                setValue('age', data.age)
                setValue('genre', data.genre)
                setValue('weight', data.weight)
                setValue('height', data.height)
            } catch (error) {
                console.error("Error al obtener los datos del meme:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id, setValue]);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        updateProfile(id, data)
        navigate(-1)
    }

    return (
        <div>
            <div>
                <h2>Actualizar información</h2>
            </div>

            <div  > 
                <form id="formAddProfile" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form__label">Nombre</label>
                        <div>
                            <input
                                type="text"
                                className="form__input"
                                name='name'
                                {...register('name', { required: true })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="form__label">email</label>
                        <div>
                            <label className="form__input">{data.email}</label>
                        </div>
                    </div>

                    <div>
                        <label className="form__label">Edad</label>
                        <div>
                            <input
                                type="number"
                                className="form__input"
                                name='age'
                                {...register('age', { required: true })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="form__label" >Sexo</label>
                        <div >
                            <select
                                type="text"
                                className="form__input"
                                {...register('genre', { required: true })}>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="form__label">Peso</label>
                        <div>
                            <input
                                type="number"
                                className="form__input"
                                name='weight'
                                {...register('weight', { required: true })}
                            />
                        </div>
                    </div>


                    <div>
                        <label className="form__label" >Altura</label>
                        <div >
                            <input
                                type="number"
                                className="form__input"
                                name='height'
                                {...register('height', { required: true })}
                            />
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Guardar información" className="form__button" />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EditProfile

