// src/pages/profile/CreateProfile.jsx
import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import { createProfile } from '../../services/ProfileServices';
import '../../components/modal/Modal.css';

const CreateProfile = () => {
    const { userAuth } = useUserContext();
    const [formData, setFormData] = useState({
        userId: '',
        age: '',
        weight: '',
        sex: '',
        height: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        if (userAuth && userAuth.id) {
            console.log('User Auth:', userAuth);
            setFormData((prevData) => ({
                ...prevData,
                userId: userAuth.id
            }));
        }
    }, [userAuth]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Field changed: ${name} = ${value}`);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await createProfile(formData);
            console.log('Profile creation result:', result);

            if (result.success) {
                setSuccess(result.message);
                setFormData({
                    userId: '',
                    age: '',
                    weight: '',
                    sex: '',
                    height: ''
                });
            } else {
                setError(result.message);
            }

        } catch (error) {
            console.error('Error creating profile:', error);
            setError('An error occurred while creating the profile.');
        }
    };

    const closeModal = () => {
        setModalOpen(false);
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
                            <h2 className="modal-title">Create Profile</h2>
                            <form onSubmit={handleSubmit} className="form">
                                <input
                                    type="hidden"
                                    name="userId"
                                    value={formData.userId}
                                />
                                <label className="form__label">
                                    Age:
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                        className="form__input"
                                    />
                                </label>
                                <label className="form__label">
                                    Weight:
                                    <input
                                        type="number"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        required
                                        className="form__input"
                                    />
                                </label>
                                <label className="form__label">
                                    Sex:
                                    <input
                                        type="text"
                                        name="sex"
                                        value={formData.sex}
                                        onChange={handleChange}
                                        required
                                        className="form__input"
                                    />
                                </label>
                                <label className="form__label">
                                    Height:
                                    <input
                                        type="number"
                                        name="height"
                                        value={formData.height}
                                        onChange={handleChange}
                                        required
                                        className="form__input"
                                    />
                                </label>
                                <div className="form-buttons">
                                    <button type="submit" className="modal-button">
                                        Create Profile
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="modal-cancel-button"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                {error && (
                                    <p className="form__message form__message--error">{error}</p>
                                )}
                                {success && (
                                    <p className="form__message form__message--success">{success}</p>
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