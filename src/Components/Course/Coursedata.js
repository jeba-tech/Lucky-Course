import React, { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import '../Header/Courses.css'
import CartProducts from '../Cart/CartProducts';
import Swal from 'sweetalert2'
import RandomSelectProduct from './RandomSelectProduct';


const Coursedata = () => {
      const [courses, setCourses] = useState([])
      const [cart, setCart] = useState([]);
      const [lucky, setLucky] = useState([])
      useEffect(() => {
            fetch('courses.json')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])



      const Reset = () => {
            setCart([])
            // setLucky([])
      }




      const handleAddToCart = (course) => {
            console.log("Selected Course:", course);
            const double = cart.find(doubleCount => doubleCount.id === course.id)
            if (double) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You can not select same Item',
                  });

            }
            else {
                  const newCart = [...cart, course];
                  console.log("Updated Cart:", newCart);
                  setCart(newCart);
            }

      };


      const RandomSelect = () => {

            if (cart.length === 0) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please add to cart first',
                  });
            } else {
                  const randomIndex = Math.floor(Math.random() * cart.length);
                  const luckyItem = cart[randomIndex];
                  setLucky(luckyItem);
            }

      };

      console.log("Cartlucky", lucky)
      console.log("Cartvhvhh", cart)
      console.log("Cartcourses", courses)


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
                        <h1 className=' ms-5 mt-5 fs-4'>Cart Summary</h1>
                        <h1 className='ms-5  fs-5 p-1'>Selected Items:{cart.length}</h1>
                        {cart.length > 0 ? (
                              <>
                                    <h5 className='ms-5 mb-4 fs-5 p-1'>Thank you and happy learning!!</h5>
                                    {cart.map(productCart => (
                                          <CartProducts productCart={productCart} key={productCart.id} />
                                    ))}
                              </>
                        ) : (
                              <h5 className='ms-5 mb-4 fs-5 p-1'>No courses selected</h5>
                        )}
                        <div className="multiBtn">
                              <button className='btn btn-success mb-4 p-2  ms-4' onClick={RandomSelect}>Choose one For me</button><br></br>
                              <button className='btn btn-secondary p-2 ms-4' onClick={Reset}>Reset Products</button>
                        </div>
                        <div className="div my-4">
                              <RandomSelectProduct lucky={lucky}></RandomSelectProduct>
                        </div>

                  </div>


            </div>
      );
};

export default Coursedata;