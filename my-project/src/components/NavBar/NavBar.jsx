import React from 'react' 
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";


const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "#",
    },
    {
      id: 3,
      title: "Courses",
      link: "#",
    },
    {
      id: 4,
      title: "About us ",
      link: "#",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "#",
    },
  ];

function NavBar() {
  return (
    <>  
    <nav className='relative z-20'>

    < motion.div 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }} 
    className="container py-10 flex justify-between items-center "> 
       {/* logo section*/ }  
         <div className="logo"> 
            <h1 className='font-bold text-2xl'>E-learning TECH</h1>
         </div>
         {/* meno section*/ } 

          <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}  

             {/* apply component for primarybtn from index.css */}
            <button className="primary-btn">Sign UP</button>
          </ul>
        </div> 
         {/* mobile view section*/ }
         <div className="lg:hidden"> 
         <GiHamburgerMenu className="text-4xl" />

         </div>

         
     </motion.div>

    </nav>
  
    
    
    
    
    
    
    </>
  )
}

export default NavBar