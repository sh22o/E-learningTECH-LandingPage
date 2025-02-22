import React from 'react'; 
import { motion } from "framer-motion"; 
import imgURL from "../../assets/bg.png"; 

/* have a problem on this section on mobile view */

const bgStyle = {
  backgroundImage: `url(${imgURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Subscribe() {
  return (
    <>
      <section className="bg-[#f7f7f7]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={bgStyle}
          className="container px-4 py-16 md:py-24 lg:py-48"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !leading-snug sm:mb-[25px]">
                450K+ Students are learning from us
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae iusto minima
              </p>
              <a
                href=""
                className="primary-btn !mt-6 sm:!mt-8 inline-flex items-center gap-2 sm:gap-4 group text-sm sm:text-base"
              >
                SignUp Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Subscribe;
