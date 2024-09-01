import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        
        <div className="min-h-screen flex flex-col items-center justify-center mb-20">
            <div className="circlePosition bg-pink-600/70 rounded-[100%] blur-[180px] bg-fixed w-[590px] h-[400px] absolute z-1 translate-y-[-20%] translate-x-[-30%]"></div>
            <div className="circlePosition bg-purple-600 rounded-[100%] blur-[220px] bg-fixed w-[590px] h-[300px] absolute z-1  translate-y-[80%] translate-x-[-80%]"></div>
            <div className="circlePosition bg-orange-600/60 rounded-[100%] blur-[220px] bg-fixed w-[400px] h-[590px] absolute z-1  translate-y-[-10%] translate-x-[90%]"></div>
            
            <div className="grid grid-rows-3 grid-flow-col gap-4 ml-40 mr-40 mt-20 mb-20 p-10 rounded-lg bg-white/20 backdrop-blur-sm shadow-2xl">
                <div class="row-span-3 mr-20">
                    <img className="size-full" src="/headphones.webp"></img>
                </div>
                <div class=" col-span-2">
                    <h1 className="text-6xl font-bold ">Market Manager</h1>
                </div>
                <div class="row-span-2 col-span-2 w-">
                    <p className="">
                    Bienvenido a nuestra plataforma integral de gestión de supermercados. 
                    En este espacio digital, tendrás la capacidad de administrar de manera 
                    eficiente todos los aspectos de tu supermercado. Podrás gestionar los productos, 
                    incluyendo su inventario, precios y descripciones detalladas, asegurando que 
                    siempre tengas control total sobre lo que ofreces a tus clientes. Además, 
                    la plataforma te permitirá manejar la información de tus clientes, facilitando 
                    la creación de perfiles, el seguimiento de sus preferencias y compras, 
                    y la mejora de la experiencia de usuario. También podrás controlar y monitorear 
                    las ventas, con acceso a informes detallados y análisis en tiempo real, que te 
                    ayudarán a tomar decisiones estratégicas para maximizar tus ganancias y optimizar 
                    tus operaciones diarias. Con esta herramienta, tendrás todo lo necesario para llevar 
                    tu supermercado al siguiente nivel de eficiencia y éxito.</p>
                </div>
            </div>
            <div className="space-x-4 ml-20 mr-20 flex flex-row grid-rows-3 gap-4">
                <div className="backdrop-blur-sm bg-white/10 row-span-1 p-10 rounded-lg  hover:shadow-2xl duration-300 grid justify-items-center">
                    <span className=" mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-52">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </span>
                    <article className="text-center mb-5">
                        <h1 className="text-2xl font-bold text-center mb-5">Gestión de Productos</h1>
                        <p class="">Para realizar la gestión de productos del supermarket,
                            haga click al siguiente botón
                        </p>
                    </article>
                    <button
                        className="flex flex-row transition ease-in-out hover:-translate-y-1 hover:scale-110 duration:300 bg-purple-600 text-zinc-300 px-4 py-2 rounded hover:bg-purple-900 shadow-md shadow-purple-700"
                        onClick={() => window.location.href = "/products"}
                    >
                        Gestionar Productos
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="backdrop-blur-sm bg-white/10 row-span-3 p-10 rounded-lg  hover:shadow-2xl duration-300 grid justify-items-center">
                    <span className=" mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-52">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    </span>
                    <article className="text-wrap mb-5">
                        <h1 className="text-2xl font-bold text-center mb-5">Gestión de Clientes</h1>
                        <p class="text-center">Para realizar la gestión de productos del supermarket,
                            haga click al siguiente botón
                        </p>
                    </article>
                    <button
                        className="flex flex-row transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 bg-purple-600 text-zinc-300 px-4 py-2 rounded hover:bg-purple-900 shadow-md shadow-purple-700"
                        onClick={() => window.location.href = "/clients"}
                    >
                        Gestionar Clientes
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="backdrop-blur-sm bg-white/10 row-span-3 p-10 rounded-lg  hover:shadow-2xl duration-300 grid justify-items-center">
                    <span className=" mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-52">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>

                    </span>
                    <article className="text-wrap mb-5">
                        <h1 className="text-2xl font-bold text-center mb-5">Gestión de Ventas</h1>
                        <p class="text-center">Para realizar la gestión de productos del supermarket,
                            haga click al siguiente botón
                        </p>
                    </article>
                    <button
                        className="flex flex-row transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 bg-purple-600 text-zinc-300 px-4 py-2 rounded hover:bg-purple-900 shadow-md shadow-purple-700"
                        onClick={() => window.location.href = "/ventas"}
                    >
                        Gestionar Ventas
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
        </div>

    );
};

export default HomePage;
