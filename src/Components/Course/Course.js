import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "../Header/Courses.css"
const Course = (props) => {
      const { course, handleAddToCart } = props;
      const { img, name, price } = course;

      return (
            <div >
                  <div className='course  '>
                        <img style={{ width: "370px", height: "340px", margin: "0px", }} src={img} alt="" />
                        <h3 className='fs-5 m-2'>Course Name:  {name}</h3>
                        <span className="star text-warning"><i className="fas fa-star"></i> <i
                              className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i
                                          className="fas fa-star-half-alt"></i></span>
                        <h3 className='fs-5 m-2' style={{ color: "#787885" }}>Course Price:  {price} </h3>

                  </div>
                  <button onClick={() => handleAddToCart(course)} className='btn-cart shadow mb-5 rounded '>
                        <p className='cart'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  </button>
            </div>

      );
};

export default Course;