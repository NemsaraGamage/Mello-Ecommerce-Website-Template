import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';
import Pagination from "../pages/Pagination";

// keyboard items
import vo1 from '../pics/violin/1.webp';
import vo2 from '../pics/violin/2.webp';
import vo3 from '../pics/violin/3.webp';
import vo4 from '../pics/violin/4.webp';
import vo5 from '../pics/violin/5.webp';
import vo6 from '../pics/violin/6.webp';
import vo7 from '../pics/violin/7.webp';
import vo8 from '../pics/violin/8.webp';
import vo9 from '../pics/violin/9.webp';
import vo10 from '../pics/violin/10.webp';

const violinPage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: vo1, id: 1, name: 'Yamaha AV10-44SG',description: 'Size Intermediate', price: '$2,462.00', },
        { imgSrc: vo2, id: 2, name: 'Yamaha AV5-SKU',description: 'Student Violin', price: '$1,199.00', },
        { imgSrc: vo3, id: 3, name: 'Knilling 110VN',description: 'Student Violin ', price: '$500.00', },
        { imgSrc: vo4, id: 4, name: 'Scherl & Roth ',description: ' Student Violin ', price: '$820.00', },
        { imgSrc: vo5, id: 5, name: 'Yamaha AV7-44SG',description: 'Student Violin ', price: '$1,604.00', },
        { imgSrc: vo6, id: 6, name: 'Aubert Vuillaume ',description: 'Professional Violin ', price: '6,659.99', },
        { imgSrc: vo7, id: 7, name: 'Eastman VL928',description: 'Professional Violin ', price: '$5,315.00', },
        { imgSrc: vo8, id: 8, name: 'Revelle REV35 ',description: 'Student Violin ', price: '$599.00', },
        { imgSrc: vo9, id: 9, name: 'Howard Core ',description: 'Student Violin ', price: '$1,299.00', },
        { imgSrc: vo10, id: 10, name: 'Revelle REV25',description: 'Student Violin ', price: '$259.00', },
    ]

    return (
        <>
        <NavBarHead />

        {/* keyboards  */}
        <h1 className='productHead'>Violin</h1>

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