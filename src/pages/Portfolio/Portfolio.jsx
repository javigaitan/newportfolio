import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import { getDocs, collection } from 'firebase/firestore';
import {db} from '../../service/firebase-config';
import Nova from '../../assets/Proyectos/Nova Academy.png';
import Aikido from '../../assets/Proyectos/Aikido Store.png';
import Pokemon from '../../assets/Proyectos/Pokemon PI.png';
import App from '../../assets/Proyectos/React App.png';
import Sushi from '../../assets/Proyectos/Sushi Alta Cordoba.png';
import Games from '../../assets/Proyectos/Video Games Store.png';
import Hidromiel from '../../assets/Proyectos/Freyr Hidromiel.png';
import Portafolio from '../../assets/Proyectos/Portafolio.png';






const Portfolio = () => {

  return (
    <>
        <Navbar/>
        <div className="bg-gray-100 ">
                {/* Remove py-8 */}
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Nova} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Nova Academy</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Un servicio para compra y venta de cursos, con la posibilidad como usuario de comprar y vender contenido educativo. Conectado con Mercado Pago y con un administrador para gestionar cursos y usuario existentes.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Tailwind CSS</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">NodeJs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://pf-nova-academy.vercel.app/#/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                    </div>
                               </div>
                            </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Pokemon} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Pokemons App</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Una App para consultar datos de una Api (Pokemons) y poder verlos segun parametros definidos y acomodarlos segun filtros configurados. Se pueden crear Pokemons guardarlos y luego borrarlos si asi se necesita.</p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">NodeJs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://pokemon-deploy-delta.vercel.app/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Games} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Video Games App</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Una App para consultar datos de una Api (Video Games) y poder verlos segun parametros definidos y acomodarlos segun filtros configurados. Se pueden crear Video Games guardarlos y luego borrarlos si asi se necesita.</p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">NodeJs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://video-games-henry-pi.vercel.app/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={App} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Search Food</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Una App para consultar datos de una Api (Recetas) y poder verlos segun parametros definidos y acomodarlos segun filtros configurados. Es posible ver el detalles de la recetas seleccionadas.</p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://recipe-app-mu-roan.vercel.app/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Aikido} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Aikido Store</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Un e-commerce de indumentaria de artes marciales (Aikido) donde se pueden renderizar los datos desde las base de datos creada desde Firebase. Se pueden seleccionar elementos para comprar los lleva al carrito y se ejecuta la compra.</p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Firebase</p>
                                        </div>
                                        
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://e-commerce-react-topaz.vercel.app/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Sushi} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Sushi Alta Cordoba</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Una App de un local de comida donde se pueden ver diferentes informacion relacionada al lugar, tanto ubicacion, comida, eventos y contacto. Poseee un carrito para comprar y armar los platos a tu eleccion. </p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">HTML</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">SASS</p>
                                        </div>
                                        
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://javigaitan.github.io/SushiAltacbaJS/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Portafolio} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Portafolios </h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Un primer modelo de portafolios para mostrar los trabajos realizado ademas de skills, about, contacto, adaptado a dispositivos moviles. </p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://portfoliogaitan.000webhostapp.com/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}

                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src={Hidromiel} className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Freyr Hidromiel </h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Sitio para mostrar informacion de un local de bebidas artesanales (Hidromiel), brinda diferentes informacion como ubicacion, contactos, historia y galeria de fotos. Se ponene en practica diferentes tecnicas de desarrollo.</p>
                                    <div className="flex mt-4">
                                    <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">HTML</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Js</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">CSS</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">SASS</p>
                                        </div>
                                        
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <Link to="https://javigaitan.github.io/freyrHidromielWeb/" className="text-indigo-700 text-xl font-semibold hover:text-indigo-900">
                                            Demo
                                            </Link>
                                            </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}
                        
                        
                    </div>
                    
                </div>
            </div>
            </>
  )
}

export default Portfolio