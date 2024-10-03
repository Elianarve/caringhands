import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileByUserId, updateProfile } from '../../services/ProfileServices';
import '../../components/modal/Modal.css';

const EditProfile = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        userId: '',
        age: '',
        weight: '',
        sex: '',
        height: '',
        steps: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log(`Fetching profile for user ID: ${id}`);
                const profile = await getProfileByUserId(id);
                console.log('Profile data fetched:', profile);
                setFormData(profile);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setError('Error fetching profile data.');
            }
        };
        fetchProfile();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(`Updated formData: ${name} = ${value}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form data:', formData);
            const result = await updateProfile(id, formData);
            console.log('Update result:', result);
            if (result.success) {
                setSuccess(result.message);
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error('An error occurred while updating the profile:', error);
            setError('An error occurred while updating the profile.');
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
                            <h2 className="modal-title">Edit Profile</h2>
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
                                <label className="form__label">
                                    Steps:
                                    <input
                                        type="number"
                                        name="steps"
                                        value={formData.steps}
                                        onChange={handleChange}
                                        required
                                        className="form__input"
                                    />
                                </label>
                                <div className="form-buttons">
                                    <button type="submit" className="modal-button">
                                        Update Profile
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="modal-cancel-button"
                                    >
                                        Cancel
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

export default EditProfile;