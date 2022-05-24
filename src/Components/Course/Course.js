import React from 'react';

const Course = (props) => {
      const { src, id, name, price } = props.course;

      return (
            <div>
                  <div className='course'>
                        <h4>{src}</h4>
                        <h4>Course id:{id}</h4>
                        <h3>Course Name:{name}</h3>
                        <h3>Course Price:{price} </h3>
                  </div>
                  <button onClick={() => props.handleAddToCart(props.course)} className='btn-cart'>
                        <p>Add to Cart</p>
                  </button>
            </div>

      );
};

export default Course;