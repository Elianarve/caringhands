import axios from "axios";

const API_URL = "http://localhost:5000/profile";

export const getProfileById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateProfile = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createProfile = async (profileData) => {
    try {
        const response = await axios.post(`${API_URL}/`, profileData);
        return response.data;
    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
    }
};