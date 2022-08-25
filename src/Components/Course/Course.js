import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "../Header/Courses.css"
const Course = (props) => {
      const { course, handleAddToCart } = props;
      const { img, id, name, price } = course;

      return (
            <div>
                  <div className='course'>
                        <img style={{ width: "370px", height: "340px", margin: "40px", }} src={img} alt="" />
                        <h3 className='fs-4 m-2'>Course Name:  {name}</h3>
                        <h3 className='fs-4 m-2'>Course Price:  {price} </h3>
                  </div>
                  <button onClick={() => handleAddToCart(id)} className='btn-cart'>
                        <p className='cart'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  </button>
            </div>

      );
};

export default Course;