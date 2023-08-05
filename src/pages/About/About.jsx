import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import NotFound from '../../component/NotFound/NotFound'
import Footer from '../../component/Footer/Footer'
import PHOTO from '../../assets/perfil.jpg'

const About = () => {
  return (
    <>
    <Navbar/>

    <div className='p-5'>
        <div className="dark:bg-gray-900 ">
          <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div>
                <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none"></p>
              </div>
              <div className="md:mt-3">
                <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">Gaitan Javier Emanuel</p>
              </div>
              
              <div className="grid grid-cols-2 mt-8 gap-y-6">
                <div>
                  <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Country: <span className="font-semibold md:font-medium">Cordoba, Argentina</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                    Date: <span className="font-semibold md:font-medium">11-11-1994</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                    Hobby: <span className="font-semibold md:font-medium">martial arts, soccer, skateboarding and reading
                    </span>
                  </p>
                </div>
                
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img className="w-full" src={PHOTO} alt="laptops" />
            </div>
          </div>
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">About</h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                Hi! Mi name is Javier, I’m a Full Stack Developer, at the moment I’m expanding my knowledge to Testing QA.
                I was part of several proyects where I perform different tasks and quickly respons to contingens and new needs.
                I'm very confortable looking for Solutions and leading. 
                About muy experiences, I was part of Costumer Supporting area as a team leader.
                Through that experience I could learn and improve many soft skills that are very useful at IT enviroment.
                </p>
              </div>
              
              
            </div>
            
          </div>
        </div>
      </div> 
      <Footer/>

    
    </>
  )
}

export default About