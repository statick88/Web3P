import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVentaById, deleteVenta } from '../services/ventaService';

const VentaDetails = () => {
    const [venta, setVenta] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVenta = async () => {
            try {
                const response = await getVentaById(id);
                setVenta(response.data);
            } catch (error) {
                console.error('Error fetching venta:', error);
            }
        };

        fetchVenta();
    }, [id]);

    const handleDelete = async () => {
        const confirmed = window.confirm('¿Estás seguro de eliminar esta venta?');
        if (confirmed) {
            try {
                await deleteVenta(id);
                navigate('/ventas');
            } catch (error) {
                console.error('Error deleting venta:', error);
            }
        }
    };

    if (!venta) return <p>Cargando...</p>;

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Detalles de Venta</h2>
            <div className="bg-white p-8 shadow-md rounded">
                <p><strong>Cliente:</strong> {venta.clientId}</p>
                <p><strong>Fecha:</strong> {new Date(venta.date).toLocaleDateString()}</p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Detalles</h3>
                <div className="space-y-2">
                    {venta.detalles.map(detalle => (
                        <div key={detalle._id}>
                            <p><strong>Producto:</strong> {detalle.productId}</p>
                            <p><strong>Cantidad:</strong> {detalle.quantity}</p>
                            <p><strong>Precio:</strong> ${detalle.price}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button
                        onClick={() => handleDelete()}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Eliminar Venta
                    </button>
                    <button
                        onClick={() => navigate('/ventas')}
                        className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Volver
                    </button>
                </div>
            </div>
            <div className="circlePosition bg-pink-600/70 rounded-[100%] blur-[200px] fixed w-[390px] h-[400px]  z-1 translate-y-[60%] translate-x-[20%]"></div>
            <div className="circlePosition bg-purple-600 rounded-[100%] blur-[250px] fixed w-[590px] h-[300px] z-1  translate-y-[80%] translate-x-[-80%]"></div>
            <div className="circlePosition bg-orange-600/60 rounded-[100%] blur-[220px] fixed w-[400px] h-[590px] z-1  translate-y-[50%] translate-x-[100%]"></div>
        </div>
    );
};

export default VentaDetails;
