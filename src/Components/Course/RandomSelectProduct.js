import React from 'react';
import "./RandomSelectProduct.css"

const RandomSelectProduct = ({ lucky }) => {
      return (
            <div className='cartProducts container'>
                  <img className='cartImg' src={lucky.img} alt="" />
                  <h5>{lucky.name}</h5>
            </div>
      );
};

export default RandomSelectProduct;