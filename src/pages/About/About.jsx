import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import NotFound from '../../component/NotFound/NotFound'
import Footer from '../../component/Footer/Footer'
import PHOTO from '../../assets/perfil.jpg'

const About = () => {
  return (
    <>
    <Navbar/>

    <div className='px-4'>
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
                  Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a
                  short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
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