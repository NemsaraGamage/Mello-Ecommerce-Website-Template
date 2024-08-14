import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';
import Pagination from "./Pagination";

// keyboard items
import sax1 from '../pics/sax/1.webp';
import sax2 from '../pics/sax/2.webp';
import sax3 from '../pics/sax/3.webp';
import sax4 from '../pics/sax/4.webp';
import sax5 from '../pics/sax/5.webp';
import sax6 from '../pics/sax/6.webp';
import sax7 from '../pics/sax/7.webp';
import sax8 from '../pics/sax/8.webp';
import sax9 from '../pics/sax/9.webp';
import sax10 from '../pics/sax/10.webp';

const violinPage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: sax1, id: 1, name: 'BetterSax ',description: 'Student Alto Saxophone', price: '$662.00', },
        { imgSrc: sax2, id: 2, name: 'Yamaha YAS-26',description: 'Student Alto Saxophone ', price: '$2,502.00', },
        { imgSrc: sax3, id: 3, name: 'BetterSax Classic',description: 'Student Tenor Saxophone ', price: '$1,499.00', },
        { imgSrc: sax4, id: 4, name: 'Yamaha YBS-480 ',description: 'Intermediate Baritone Saxophone ', price: '$6,520.00', },
        { imgSrc: sax5, id: 5, name: 'Yamaha YAS-62III',description: 'Professional Alto Saxophone ', price: '$3,689.00', },
        { imgSrc: sax6, id: 6, name: 'Selmer Paris 94  ',description: 'Tenor Supreme Saxophone ', price: '$10,799.00', },
        { imgSrc: sax7, id: 7, name: 'Eastman EBS652',description: 'Professional Baritone Saxophone ', price: '$7,315.00', },
        { imgSrc: sax8, id: 8, name: 'Yamaha YTS-62 ',description: 'Professional Tenor Saxophone ', price: '$3,999.00', },
        { imgSrc: sax9, id: 9, name: 'Yamaha YAS-875EXII ',description: ' Professional Alto Saxophone ', price: '$4,999.00', },
        { imgSrc: sax10, id: 10, name: 'Selmer Paris 94 ',description: 'Tenor Supreme Saxophone ', price: '$16,259.00', },
    ]

    return (
        <>
        <NavBarHead />

        {/* keyboards  */}
        <h1 className='productHead'>Saxophone</h1>

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