import React from 'react';
import '../Header/Courses.css'

const Cart = ({ cart }) => {
      return (
            <div>

                  <h1>Cart Summary</h1>
                  <p>Selected Items:{cart.length}</p>
                  <div className='cart-btn'>
                        <button>Choose one for Me</button><br></br>
                        <button>Remove All</button>
                  </div>
            </div>
      );
};

export default Cart;