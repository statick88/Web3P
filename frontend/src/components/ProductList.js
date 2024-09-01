import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../services/productService';
import { useNavigate } from 'react-router-dom';


const ProductList = ({ onEdit }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 ">
            <h2 className="text-2xl font-bold mb-6">Lista de Productos</h2>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                        <th className="py-2 px-4 border-b">Stock</th>
                        <th className="py-2 px-4 border-b">Descripción</th>
                        <th className="py-2 px-4 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td className="py-2 px-4 border-b">{product.name}</td>
                            <td className="py-2 px-4 border-b">{product.price}</td>
                            <td className="py-2 px-4 border-b">{product.stock}</td>
                            <td className="py-2 px-4 border-b">{product.description}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => navigate(`/edit-product/${product._id}`)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(product._id)}
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
                onClick={() => navigate('/add-product')}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration:300 m-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
                Agregar Producto
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

export default ProductList;
