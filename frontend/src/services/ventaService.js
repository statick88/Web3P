import axios from 'axios';

const API_URL = 'http://localhost:5002/api/sales';

export const getVentas = () => {
    return axios.get(API_URL);
};

export const getVentaById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createVenta = (venta) => {
    return axios.post(API_URL, venta);
};

export const updateVenta = (id, venta) => {
    // Implementar si se necesita un endpoint PUT para actualizar ventas
    return axios.put(`${API_URL}/${id}`, venta);
};

export const deleteVenta = async (id) => {
    try {
        const result = await axios.delete(`${API_URL}/${id}`);
        return result;
    } catch (error) {
        console.error('Error deleting venta:', error);
    }
};

export const getVentasByCliente = (clienteId) => {
    return axios.get(`${API_URL}/cliente/${clienteId}`);
};

