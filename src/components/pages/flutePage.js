import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';
import Pagination from "../pages/Pagination";

// keyboard items
import fl1 from '../pics/flute/1.webp';
import fl2 from '../pics/flute/2.webp';
import fl3 from '../pics/flute/3.webp';
import fl4 from '../pics/flute/4.webp';
import fl5 from '../pics/flute/5.webp';
import fl6 from '../pics/flute/6.webp';
import fl7 from '../pics/flute/7.webp';
import fl8 from '../pics/flute/8.webp';
import fl9 from '../pics/flute/9.webp';
import fl10 from '../pics/flute/10.webp';

const flutePage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: fl1, id: 1, name: 'Yamaha YFL-222',description: 'Student Flute', price: '$1,162.00', },
        { imgSrc: fl2, id: 2, name: 'Yamaha YFL-362H',description: 'Intermediate F', price: '$1,799.00', },
        { imgSrc: fl3, id: 3, name: 'Yamaha YPC-32 ',description: 'Student Piccolo ', price: '$1,600.00', },
        { imgSrc: fl4, id: 4, name: 'Yamaha YFL-462H ',description: 'Intermediate Flute ', price: '$2,820.00', },
        { imgSrc: fl5, id: 5, name: 'Prelude by Selmer',description: 'Piccolo ', price: '$404.00', },
        { imgSrc: fl6, id: 6, name: 'Pearl Flutes ',description: 'Intermediate Flute  ', price: '1,150.99', },
        { imgSrc: fl7, id: 7, name: 'Pearl Flutes',description: 'Intermediate Flute ', price: '$1,315.00', },
        { imgSrc: fl8, id: 8, name: 'Azumi AZ3SRBEO-C  ',description: 'Concert Flute ', price: '$3,899.00', },
        { imgSrc: fl9, id: 9, name: 'Pearl Flutes ',description: ' Intermediate Alto Flute ', price: '$2,299.00', },
        { imgSrc: fl10, id: 10, name: 'Powell Sonare',description: 'Professional Flute ', price: '$7,259.00', },
    ]

    return (
        <>
        <NavBarHead />

        {/* keyboards  */}
        <h1 className='productHead'>Flute</h1>

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

export default flutePage;