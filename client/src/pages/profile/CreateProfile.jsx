// src/pages/profile/CreateProfile.jsx
import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import { createProfile } from '../../services/ProfileServices';
import './Profile.css';

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

    console.log('Form Data:', formData);

    console.log('User Auth:', userAuth);

    console.log('Error:', error);
    console.log('Success:', success);

    return (
        <div className="create-profile">
            <h2>Create Profile</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="userId"
                    value={formData.userId}
                />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Weight:
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Sex:
                    <input
                        type="text"
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Height:
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Create Profile</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );
};

export default CreateProfile;