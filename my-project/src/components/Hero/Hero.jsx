import React from 'react' 
import NavBar from '../NavBar/NavBar' 
import { IoIosArrowRoundForward } from "react-icons/io";
import {motion} from 'framer-motion'; 


/* function for set animation*/ 
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

function Hero() {
  return (
    <>
    <section className="bg-light overflow-hidden relative">
    <NavBar></NavBar>  
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]"> 
      {/* info heroSection*/ } 
       <div  className='flex flex-col justify-center z-20 mt-[-100px]'>  
        <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">  
        < motion.h1  variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
         className="text-3xl lg:text-5xl font-bold !leading-snug">Let's Learn to build a {" "} <span className='text-secondary'>Website</span> for your business</motion.h1>

        </div>
  
        {/* button on info */ } 
        <motion.div variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
        className="flex justify-center md:justify-start"> 
        <button className="primary-btn flex items-center gap-2 group text-xl mt-5">
        Get Started 
        <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300 " />
 
        </button>
        </motion.div>
       
        </div> 
       {/* image heroSection*/ } 
       <div className="flex justify-center items-center "> 
        <motion.img 
         initial={{ x: 50, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        
        className="w-[400px] xl:w-[600px] relative z-10 drop-shadow mt-[-60px]"  src="https://i.ibb.co/dQqS5Xn/hero.png"  />
         <motion.img   initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }} 
           className='absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block'  src="https://i.ibb.co/J7fn7d1/blob.png"  />
       </div>


    </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Hero