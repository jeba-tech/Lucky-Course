import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Course = (props) => {
      const { course, handleAddToCart } = props;
      const { src, id, name, price } = course;

      return (
            <div>
                  <div className='course'>
                        <h4>{src}</h4>
                        <h4>Course id:{id}</h4>
                        <h3>Course Name:{name}</h3>
                        <h3>Course Price:{price} </h3>
                  </div>
                  <button onClick={() => handleAddToCart(id)} className='btn-cart'>
                        <p className='cart'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  </button>
            </div>

      );
};

export default Course;