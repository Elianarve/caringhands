import axios from "axios";

const API_URL_AUTH = "http://localhost:5000/auth/login";
const API_URL_R = 'http://localhost:5000/auth/register';


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL_AUTH}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };

export const getUserById = async (id
) => {
    try {
        const response = await axios.get(`${API_URL_AUTH}${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateUser = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL_AUTH}${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL_AUTH}${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const loginUser = async (data) => {
    try {
        const response = await axios.post(API_URL_AUTH, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const createUser = async (user) => {
    try {
        const response = await axios.post(API_URL_R, user);
        return response.data;
    } catch (error) {
        throw new Error('Error al crear el usuario: ' + error.message);
    }
};




