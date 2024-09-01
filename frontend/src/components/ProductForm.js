import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct, updateProduct, getProductById } from '../services/productService';

const ProductForm = () => {
    const [product, setProduct] = useState({ name: '', price: '', stock: '', description: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await getProductById(id);
                    setProduct(response.data);
                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            };

            fetchProduct();
        }
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateProduct(id, product);
            } else {
                await createProduct(product);
            }
            navigate('/products'); // Redirigir a la lista de productos después de guardar
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded">
            <h2 className="text-2xl font-bold mb-6">{id ? 'Editar Producto' : 'Agregar Producto'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Precio"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Descripción"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Guardar
                    </button>
                    <button type="button" onClick={() => navigate('/products')} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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

export default ProductForm;
