import axios from 'axios';

const API_URL = 'http://localhost:5001/api/clients';

export const getClients = () => {
    try {
        const result = axios.get(API_URL);
        return result;
    } catch (error) {
        console.error('Error getting clients:', error);
    }
};

export const getClientById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createClient = (client) => {
    return axios.post(API_URL, client);
};

export const updateClient = (id, client) => {
    return axios.put(`${API_URL}/${id}`, client);
};

export const deleteClient = async (id) => {
    try {
        const result = await axios.delete(`${API_URL}/${id}`);
        return result;
    } catch (error) {
        console.error('Error deleting client:', error);
    }
};
