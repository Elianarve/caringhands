import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { loginUser } from '../../services/UserServices';
import '../../components/modal/Modal.css';

const Login = () => {
  const navigate = useNavigate();
  const { setUserAuth } = useUserContext();
  const [loginModalOpen, setLoginModalOpen] = useState(true); 
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(formData);

      if (result && result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("userId", formData.id);
        setUserAuth(result.data);
        setLoginModalOpen(false);
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
    }
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
    navigate('/')
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
                  {loginModalOpen && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button className="modal-close" onClick={closeLoginModal}>
                            &times;
                          </button>
                        </div>
                        <div className="modal-body"> 
                        <h2 className="modal-title">Login</h2>
                          <form onSubmit={handleSubmit} className="form">
                            <label htmlFor="email" className="form__label">
                                EMAIL
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email"
                              className="form__input"
                              required
                              autoComplete="email"
                            />
                            <label htmlFor="password" className="form__label">
                              CONTRASEÑA
                            </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Contraseña"
                              className="form__input"
                              required
                              autoComplete="current-password"
                            />
                            <div className="form-buttons">
                              <button type="submit" className="modal-button">
                                Login
                              </button>
                              <button
                                type="button"
                                onClick={closeLoginModal}
                                className="modal-cancel-button"
                              >
                                Cancelar
                              </button>
                            </div>
                            {error && (
                              <p className="form__message form__message--error">{error}</p>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </>

            );
        };
        export default Login;