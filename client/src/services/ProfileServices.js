import axios from "axios";

const API_URL_PROFILE = "http://localhost:3000/health";

    export const getProfileById = async (id
    ) => {
        try {
            const response = await axios.get(`${API_URL_PROFILE}/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };


// export const createProfile = async (user) => {
//     try {
//         const response = await axios.post(API_URL_PROFILE, user);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error al crear el usuario: ' + error.message);
//     }
// };

