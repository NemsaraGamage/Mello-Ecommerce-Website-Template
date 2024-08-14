import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';
import Pagination from "../pages/Pagination";

// keyboard items
import dj1 from '../pics/dj/1.webp';
import dj2 from '../pics/dj/2.webp';
import dj3 from '../pics/dj/3.webp';
import dj4 from '../pics/dj/4.webp';
import dj5 from '../pics/dj/5.webp';
import dj6 from '../pics/dj/6.webp';
import dj7 from '../pics/dj/7.webp';
import dj8 from '../pics/dj/8.webp';
import dj9 from '../pics/dj/9.webp';
import dj10 from '../pics/dj/10.webp';

const violinPage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: dj1, id: 1, name: 'Pioneer DJM-A9 ',description: 'DJ Mixer', price: '$2,662.00', },
        { imgSrc: dj2, id: 2, name: 'Pioneer DJM-A9',description: ' Mixer and Dual CDJ3000 Media ', price: '$7,722.00', },
        { imgSrc: dj3, id: 3, name: 'AlphaTheta',description: 'Rotary Mixer ', price: '$3,799.00', },
        { imgSrc: dj4, id: 4, name: 'Pioneer DJM-450 ',description: ' DJ Mixer ', price: '$720.00', },
        { imgSrc: dj5, id: 5, name: 'Pioneer DJM-V10',description: 'DJ Mixer ', price: '$3,504.00', },
        { imgSrc: dj6, id: 6, name: 'Xone96 Analogue ',description: 'DJ Mixer ', price: '$2,499.00', },
        { imgSrc: dj7, id: 7, name: 'Union Audio Orbit.6',description: 'DJ Mixer ', price: '$4,315.00', },
        { imgSrc: dj8, id: 8, name: 'Numark M6 ',description: 'DJ Mixer ', price: '$219.00', },
        { imgSrc: dj9, id: 9, name: 'Union Audio Orbit.6 ',description: 'DJ Mixer ', price: '$5,299.00', },
        { imgSrc: dj10, id: 10, name: 'Rackmounted ',description: 'DJ Mixer ', price: '$6,259.00', },
    ]

    return (
        <>
        <NavBarHead />

        {/* keyboards  */}
        <h1 className='productHead'>DJ Equipment</h1>

        <div className='productCon'>
            {keyboardItems.map(item => (
                <div key={item.id} className='productItem'>
                    <img src={item.imgSrc} alt={item.name} className='productImg' />
                    <h3 className='productName'>{item.name}</h3>
                    <p className='productDescription'>{item.description}</p>
                    <p className='productPrice'>{item.price}</p>
                    <a href='#' className='seeMore'>See More</a>
                </div>
            ))}
        </div>

        {/* Pagination */}
        <Pagination/>

        <Footer></Footer>
        </>
    )
}

export default violinPage;