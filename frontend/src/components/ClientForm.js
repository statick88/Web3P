import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createClient, updateClient, getClientById } from '../services/clientServices';

const ClientForm = () => {
    const [client, setClient] = useState({ name: '', apellido: '', email: '', phone: '', address: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchClient = async () => {
                try {
                    const response = await getClientById(id);
                    setClient(response.data);
                } catch (error) {
                    console.error('Error fetching client:', error);
                }
            };

            fetchClient();
        }
    }, [id]);

    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateClient(id, client);
            } else {
                await createClient(client);
            }
            navigate('/clients'); // Redirigir a la lista de clientes después de guardar
        } catch (error) {
            console.error('Error saving client:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded">
            <h2 className="text-2xl font-bold mb-6">{id ? 'Editar Cliente' : 'Agregar Cliente'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={client.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="apellido"
                    value={client.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={client.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={client.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="address"
                    value={client.address}
                    onChange={handleChange}
                    placeholder="Dirección"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Guardar
                    </button>
                    <button type="button" onClick={() => navigate('/clients')} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Cancelar
                    </button>
                </div>
            </form>
            <div className="circlePosition bg-pink-600/70 rounded-[100%] blur-[200px] fixed w-[390px] h-[400px]  z-1 translate-y-[60%] translate-x-[20%]"></div>
            <div className="circlePosition bg-purple-600 rounded-[100%] blur-[250px] fixed w-[590px] h-[300px] z-1  translate-y-[80%] translate-x-[-80%]"></div>
            <div className="circlePosition bg-orange-600/60 rounded-[100%] blur-[220px] fixed w-[400px] h-[590px] z-1  translate-y-[50%] translate-x-[100%]"></div>
        </div>
    );
};

export default ClientForm;
