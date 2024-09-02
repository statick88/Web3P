import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVentas, deleteVenta } from '../services/ventaService';
import { getClients } from '../services/clientServices';
import { getProducts } from '../services/productService';

const VentaList = () => {
    const [ventas, setVentas] = useState([]);
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [expandedVenta, setExpandedVenta] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ventasResponse, clientsResponse, productsResponse] = await Promise.all([
                    getVentas(),
                    getClients(),
                    getProducts()
                ]);
                setVentas(ventasResponse.data);
                setClients(clientsResponse.data);
                setProducts(productsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm('¿Estás seguro de eliminar esta venta?');
        if (confirmed) {
            try {
                await deleteVenta(id);
                setVentas(ventas.filter(venta => venta._id !== id));
            } catch (error) {
                console.error('Error deleting venta:', error);
            }
        }
    };

    const getClientNameById = (id) => {
        const client = clients.find(client => client.id === id);
        return client ? client.name : 'Desconocido';
    };

    const getProductNameById = (id) => {
        const product = products.find(product => product._id === id);
        return product ? product.name : 'Desconocido';
    };

    const calculateTotal = (detalles) => {
        return detalles.reduce((total, detalle) => total + (detalle.price * detalle.quantity), 0);
    };

    const toggleDetails = (ventaId) => {
        setExpandedVenta(expandedVenta === ventaId ? null : ventaId);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Lista de Ventas</h2>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Cliente</th>
                        <th className="py-2 px-4 border-b">Fecha</th>
                        <th className="py-2 px-4 border-b">Total Venta</th>
                        <th className="py-2 px-4 border-b">Detalles</th>
                        <th className="py-2 px-4 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(venta => (
                        <tr key={venta._id}>
                            <td className="py-2 px-4 border-b">{getClientNameById(venta.clientId)}</td>
                            <td className="py-2 px-4 border-b">{new Date(venta.date).toLocaleDateString()}</td>
                            <td className="py-2 px-4 border-b">${calculateTotal(venta.detalles).toFixed(2)}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => toggleDetails(venta._id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    {expandedVenta === venta._id ? 'Ocultar Detalles' : 'Ver Detalles'}
                                </button>
                                {expandedVenta === venta._id && (
                                    <ul className="mt-2 bg-gray-100 border rounded p-2">
                                        {venta.detalles.map((detalle, index) => (
                                            <li key={index} className="py-1">
                                                {getProductNameById(detalle.productId)}, Cantidad: {detalle.quantity}, Precio: ${detalle.price.toFixed(2)}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleDelete(venta._id)}
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
                onClick={() => navigate('/add-venta')}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration:300 m-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
                Agregar Venta
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

export default VentaList;
