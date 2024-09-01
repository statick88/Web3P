import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClients, deleteClient } from '../services/clientServices';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await getClients();
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm('¿Estás seguro de eliminar este cliente?');
        if (confirmed) {
            try {
                await deleteClient(id);
                setClients(clients.filter(client => client._id !== id));
            } catch (error) {
                console.error('Error deleting client:', error);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Lista de Clientes</h2>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Apellido</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Teléfono</th>
                        <th className="py-2 px-4 border-b">Dirección</th>
                        <th className="py-2 px-4 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client._id}>
                            <td className="py-2 px-4 border-b">{client.name}</td>
                            <td className="py-2 px-4 border-b">{client.apellido}</td>
                            <td className="py-2 px-4 border-b">{client.email}</td>
                            <td className="py-2 px-4 border-b">{client.phone || 'N/A'}</td>
                            <td className="py-2 px-4 border-b">{client.address || 'N/A'}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => navigate(`/edit-client/${client._id}`)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(client._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={() => navigate('/add-client')}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration:300 m-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
                Agregar Cliente
            </button>
            <button
                onClick={() => navigate('/')}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration:300 m-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
                Menú Principal
            </button>
            <div className="circlePosition bg-pink-600/70 rounded-[100%] blur-[200px] fixed w-[390px] h-[400px]  z-1 translate-y-[60%] translate-x-[20%]"></div>
            <div className="circlePosition bg-purple-600 rounded-[100%] blur-[250px] fixed w-[590px] h-[300px] z-1  translate-y-[80%] translate-x-[-80%]"></div>
            <div className="circlePosition bg-orange-600/60 rounded-[100%] blur-[220px] fixed w-[400px] h-[590px] z-1  translate-y-[50%] translate-x-[100%]"></div>
        </div>
    );
};

export default ClientList;
