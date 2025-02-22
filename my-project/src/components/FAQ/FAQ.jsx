import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* fake data */ 
const faqData = [
  {
    question: "What is this course about?",
    answer: "This course covers all the basics of React, including components, state, and hooks, to help you build interactive user interfaces.",
  },
  {
    question: "Who is this course for?",
    answer: "This course is perfect for beginners with basic knowledge of HTML, CSS, and JavaScript who want to learn React.",
  },
  {
    question: "Do I need any prior experience?",
    answer: "You don't need prior experience with React, but familiarity with JavaScript will be helpful.",
  },
  {
    question: "What do I get after enrolling?",
    answer: "You’ll get lifetime access to the course content, downloadable resources, and a certificate of completion.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  /* toggle open and close faq */  
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <>
     <div className="container mx-auto py-12 px-4  space-y-12">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center !leading-snug">FAQ</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <motion.div
                className="px-4 pb-4 text-gray-600"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>



    
    
    
    
    
    
    </>
  )
}

export default FAQ