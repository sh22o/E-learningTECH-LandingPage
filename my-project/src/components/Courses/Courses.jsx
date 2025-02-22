import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../Hero/Hero';

/* Fake API */
const courses = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React, including components, hooks, and state management.",
    image: "https://i.ibb.co/dtkb8Qy/html-css-collage-concept.jpg",
    instructor: "John Doe",
    duration: "3 hours",
    price: "$49.99",
    offerPrice: "$29.99",
    rating: 4.5,
  },
  {
    title: "Advanced JavaScript",
    description: "Dive deeper into JavaScript concepts like closures, prototypes, and async programming.",
    image: "https://i.ibb.co/CnyyZtM/student-class-looking-course.jpg",
    instructor: "Jane Smith",
    duration: "5 hours",
    price: "$69.99",
    offerPrice: "$39.99",
    rating: 4.8,
  },
  {
    title: "HTML & CSS Basics",
    description: "Master the foundational skills to build beautiful and responsive web pages.",
    image: "https://i.ibb.co/dtkb8Qy/html-css-collage-concept.jpg",
    instructor: "John Doe",
    duration: "3 hours",
    price: "$39.99",
    offerPrice: "$19.99",
    rating: 4.7,
  },
];

function Courses() {
  return (
    <>
      <div className="container gap-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 !leading-snug">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Details */}
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {course.title}
                </h3>
                <motion.p
                  variants={FadeUp(0.3)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="text-sm text-gray-600 line-clamp-2"
                >
                  {course.description}
                </motion.p>

                {/* Instructor and Duration */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{course.instructor}</span>
                  <span>{course.duration}</span>
                </div>

                {/* Price and Offer */}
                <div className="flex justify-between items-center mt-3 text-gray-800">
                  <span className="text-sm font-bold">
                    <span className="line-through text-gray-400">{course.price}</span> {course.offerPrice}
                  </span>
                  <span className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-lg">
                    {course.rating} ★
                  </span>
                </div>

                {/* Call to Action */}
                <button className="w-full mt-4  bg-secondary  font-semibold  hover:bg-primary duration-200 shadow-[0px_10px_8px_-7px_#f7f7f7] hover:shadow-[0px_10px_8px_-7px_#69a79c]  text-white py-2 px-4 rounded-lg transition-colors">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
