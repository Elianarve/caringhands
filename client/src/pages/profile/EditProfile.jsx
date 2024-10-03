import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfileById, updateProfile } from "../services/ProfileServices";
import { useForm } from "react-hook-form";

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
        <h2>Editar meme</h2>
      </div>

      <div>
        <form id="formAddProfile" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nombre</label>
            <div>
              <input
                type="text"
                name='name'
                {...register('name', { required: true })}
              />
            </div>
          </div>

          <div>
            <label>email</label>
            <div>
              <label>{data.email}</label>
            </div>
          </div>

          <div>
            <label>Edad</label>
            <div>
              <input
                type="num"
                name='age'
                {...register('age', { required: true })}
              />
            </div>
          </div>

          <div>
            <label >Sexo</label>
            <div >
              <select
                type="text"
                {...register('genre', { required: true })}>              
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>
          </div>

          <div>
            <label>Peso</label>
            <div>
              <input
                type="num"
                name='weight'
                {...register('weight', { required: true })}
              />
            </div>
          </div>


          <div>
            <label >Altura</label>
            <div >
            <input
                type="num"
                name='height'
                {...register('height', { required: true })}
              />
            </div>
          </div>

          <div>
          <input type="submit" value="Guardar información"/>  
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditProfile;