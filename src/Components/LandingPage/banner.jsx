import React, { useState } from 'react';
import './landing.css';
import img from '../../../src/assets//landingpage2.jpg';

export default function Banner() {
  
    return (
        <div>
         
            {/* landing image */}
            <div className='landing-page-container'>
                <div className='search-form'>
                    <p>Streamline the process of listing your property with our easy-to-use platform.</p>

                    <div className='search-box'>
                        <label>
                            <span>
                                City
                            </span>
                            <input type="text" placeholder='Islamabad' />

                        </label>
                        <label>
                            <span>
                                Price
                            </span>
                            <input type="text" placeholder='20,000/-' />

                        </label>
                        <label>
                            <span>
                                Type
                            </span>
                            <input type="text" placeholder='Apartment' />

                        </label>

                        <button>Search</button>
                    </div>
                </div>
                <div className='bg-img'>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    );
}
