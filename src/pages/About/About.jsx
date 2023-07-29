import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import NotFound from '../../component/NotFound/NotFound'

const About = () => {
  return (
    <>
    <Navbar/>

    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div className=" text-center">
                <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">About</h2>
                <p className=" font-normal text-base leading-6 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
                here is a text with something important for the moment there is nothing here is a text with something important for the moment there is nothing here is a text with something important for the moment there is nothing
                </p>
            </div>

    </div>
    
    </>
  )
}

export default About