import React from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import '../Header/Courses.css'
import Cart from '../Cart/Cart';

import images from '../../images/img1.jpg'

const Coursedata = () => {
      const courses = [
            { id: 1, src: '../../images/img1.jpg', name: 'Animation', price: 9000 },
            { id: 2, src: '../../images/img2.jpg', name: 'Research Methodology', price: 10000 },
            { id: 3, src: '../../images/img3.jpg', name: 'Computer Organization & Architecture', price: 7000 },
            { id: 4, src: '../../images/img4.jpg', name: 'Theory of computation', price: 9000 },
            { id: 5, src: '../../images/img5.jpg', name: 'Statistics', price: 12000 },
            { id: 6, src: '../../images/img6.jpg', name: 'Operating System', price: 14000 },
            { id: 7, src: '../../images/img7.jpg', name: 'Computer Networks', price: 5000 },
            { id: 8, src: '../../images/img8.jpg', name: 'Engineering Ethics', price: 8000 },
            { id: 9, src: '../../images/img9.jpg', name: 'Digital logic and Circuits', price: 11000 },
            { id: 10, src: '../../images/img10.jpg', name: 'Electronic Device', price: 13000 },

      ]

      const [cart, setCart] = useState([]);

      const handleAddToCart = (course) => {
            console.log(course);
            const newCart = [...cart, course];
            setCart(newCart);
      }
      return (
            <div className='shop-container'>
                  <div className='course-container'>

                        {

                              courses.map(course => <Course
                                    key={course.id}
                                    course={course}
                                    handleAddToCart={handleAddToCart}
                              ></Course>)
                        }
                  </div>
                  <div className='cart-container'>
                        <Cart cart={cart}></Cart>
                  </div>


            </div>
      );
};

export default Coursedata;