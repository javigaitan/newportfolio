import React from 'react';
import Navbar from '../../component/Navbar/Navbar';


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
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">titulo de proyecto</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">descripcion del proyecto que realice</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <buttom className="text-indigo-700 text-xl font-semibold">botom</buttom>
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