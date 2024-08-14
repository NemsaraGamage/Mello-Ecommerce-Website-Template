import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';
import Pagination from "./Pagination";

// keyboard items
import cal1 from '../pics/clarinets/1.webp';
import cal2 from '../pics/clarinets/2.webp';
import cal3 from '../pics/clarinets/3.webp';
import cal4 from '../pics/clarinets/4.webp';
import cal5 from '../pics/clarinets/5.webp';
import cal6 from '../pics/clarinets/6.webp';
import cal7 from '../pics/clarinets/7.webp';
import cal8 from '../pics/clarinets/8.webp';
import cal9 from '../pics/clarinets/9.webp';
import cal10 from '../pics/clarinets/10.webp';

const violinPage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: cal1, id: 1, name: 'Buffet Crampon R13',description: 'Professional Bb Clarinet', price: '$4,662.00', },
        { imgSrc: cal2, id: 2, name: 'Yamaha YCL-255',description: 'Student Clarinet ', price: '$1,102.00', },
        { imgSrc: cal3, id: 3, name: 'Yamaha YCL-450N',description: 'Intermediate Clarinet', price: '$1,643.00', },
        { imgSrc: cal4, id: 4, name: 'Yamaha YCL-221 ',description: 'Student Bass Clarinet ', price: '$2,620.00', },
        { imgSrc: cal5, id: 5, name: 'Buffet Premium',description: 'Student Clarinet', price: '$831.00', },
        { imgSrc: cal6, id: 6, name: 'Buffet E-12F',description: 'Intermediate Bb Clarinet', price: '$2,580.00', },
        { imgSrc: cal7, id: 7, name: 'Backun Protégé',description: 'Intermediate Bb', price: '$2,350.00', },
        { imgSrc: cal8, id: 8, name: 'Buffet Crampon R13 ',description: 'Professional Bb Clarinet', price: '$5,244.00', },
        { imgSrc: cal9, id: 9, name: 'Jupiter JCL1100S',description: 'Performance Bb Clarinet', price: '$1,799.00', },
        { imgSrc: cal10, id: 10, name: 'Leblanc L301',description: 'Student Bb Clarinet', price: '$1,259.00', },
    ]

    return (
        <>
        <NavBarHead />

        {/* keyboards  */}
        <h1 className='productHead'>Clarinets</h1>

        <div className='productCon'>
            {keyboardItems.map(item => (
                <div key={item.id} className='productItem'>
                    <img src={item.imgSrc} alt={item.name} className='productImg' />
                    <h3 className='productName'>{item.name}</h3>
                    <p className='productDescription'>{item.description}</p>
                    <p className='productPrice'>{item.price}</p>
                    <a href='#' className='seeMore productSeeMore'>See More</a>
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