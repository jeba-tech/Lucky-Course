import React, { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import '../Header/Courses.css'
import CartProducts from '../Cart/CartProducts';
import RandomSelectProduct from './RandomSelectProduct';


const Coursedata = () => {
      const [courses, setCourses] = useState([])

      useEffect(() => {
            fetch('courses.json')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])

      const [cart, setCart] = useState([]);

      const Reset = () => {
            setCart([])
      }
      const handleAddToCart = (course) => {

            // if (cart.find(product => product.id === course.id)) {
            //       return
            // }
            // const double = cart.find(doubleCount => doubleCount.id === course.id)
            console.log(course)
            if (cart.length > 3) {
                  alert("You can select only 4 Items")
            }
            // else if (double) {
            //       alert("You can't select same Item")
            // }
            else {

                  const newCart = [...cart, course]
                  setCart(newCart)
            }



      }
      const [lucky, setLucky] = useState([])

      const RandomSelect = () => {
            console.log(cart);
            if (cart.length === 0) {
                  alert("Your Select Items Empty")
            }
            else {
                  let step1 = (cart.length - 1) - (0) + 1
                  let step2 = Math.random() * step1;
                  let result = Math.floor(step2) + 0;
                  let luckyItem = cart[result]
                  setLucky(luckyItem)
            }
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
                        <h1 className='ms-5 mt-5'>Cart Summary</h1>
                        <h1 className='text-center my- fs-2 m-3'>Selected Items:{cart.length}</h1>
                        <h5 className='text-center mb-4 fs-4'>Select Maximum 4 Items</h5>


                        {

                              cart.map(productCart => <CartProducts
                                    productCart={productCart} key={productCart.id}
                              ></CartProducts>)
                        }
                        <div className="multiBtn">
                              <button className='btn btn-success mb-4 p-2 fs-5 ms-5' onClick={RandomSelect}>Choose one For me</button><br></br>
                              <button className='btn btn-secondary p-2 fs-5 ms-5' onClick={Reset}>Reset Products</button>
                        </div>
                        <div className="div my-4">
                              <RandomSelectProduct lucky={lucky}></RandomSelectProduct>
                        </div>

                  </div>


            </div>
      );
};

export default Coursedata;