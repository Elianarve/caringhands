import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { createUser } from '../../services/UserServices';
import '../../components/modal/Modal.css';

const Register = () => {
    const { setUserAuth } = useUserContext();
    const navigate = useNavigate();
    const [registerModalOpen, setRegisterModalOpen] = useState(true);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await createUser(formData);

            if (result && result.token) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("userId", formData.id);
                setUserAuth(result.data);
                setRegisterModalOpen(false);
                navigate('/');
            }
        } catch (err) {
            setError("Registration failed. Please try again.");
            console.error("Registration error:", err);
        }
    };

    const closeRegisterModal = () => {
        setRegisterModalOpen(false);
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            {registerModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="modal-close" onClick={closeRegisterModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2 className="modal-title">REGISTRO</h2>
                            <form onSubmit={handleSubmit} className="form">
                                <label htmlFor="name" className="form__label">
                                    Nombre
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form__input"
                                        required
                                        autoFocus
                                        autoComplete="off"
                                        placeholder="Nombre"
                                    />
                                </label>
                                <label htmlFor="email" className="form__label">
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form__input"
                                        required
                                        placeholder="Email"
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </label>
                                <label htmlFor="password" className="form__label">
                                    Contraseña
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form__input"
                                        required
                                        placeholder="Contraseña"
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </label>
                                <div className="form-buttons">
                                    <button type="submit" className="modal-button">
                                        Registro
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeRegisterModal}
                                        className="modal-cancel-button"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                {error && <p className="form__message form__message--error">{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;