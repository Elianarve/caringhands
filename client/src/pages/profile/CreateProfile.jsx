// src/pages/profile/CreateProfile.jsx
import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { createProfile } from "../../services/ProfileServices";
import "../../components/modal/Modal.css";
import "../../pages/profile/Profile.css";

const CreateProfile = () => {
  const { userAuth } = useUserContext();
  const navigate = useNavigate(); // Inicializar useNavigate
  const [formData, setFormData] = useState({
    userId: "",
    age: "",
    weight: "",
    sex: "",
    height: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (userAuth && userAuth.id) {
      setFormData((prevData) => ({
        ...prevData,
        userId: userAuth.id,
      }));
    }
  }, [userAuth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const result = await createProfile(formData);

        console.log("Profile creation result:", result);

        if (result.success) {
            setSuccess(result.message);
            setFormData({
                userId: "",
                age: "",
                weight: "",
                sex: "",
                height: "",
            });
            setModalOpen(false); 
            navigate("/"); 
        } else {
            setError(result.message);
        }
    } catch (error) {
        console.error("Error creating profile:", error);
        setError("An error occurred while creating the profile.");
    }
};

  const closeModal = () => {
    setModalOpen(false);
    navigate("/");
  };

  return (
    <>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h2 className="modal-title">CREAR PERFIL</h2>
              <form onSubmit={handleSubmit} className="form">
                <input type="hidden" name="userId" value={formData.userId} />
                <label className="form__label">
                  EDAD:{" "}
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </label>
                <label className="form__label">
                  PESO:
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </label>
                <label className="form__label">
                  SEXO:
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Seleccione</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                  </select>
                </label>
                <label className="form__label">
                  ALTURA:
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </label>
                <div className="button-container">
                  <button type="submit" className="button">
                    CREAR PERFIL
                  </button>
                  <button type="button" onClick={closeModal} className="button">
                    CANCELAR
                  </button>
                </div>
                {error && (
                  <p className="form__message form__message--error">{error}</p>
                )}
                {success && (
                  <p className="form__message form__message--success">
                    {success}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProfile;
