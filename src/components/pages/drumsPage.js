import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// keyboard items
import dm1 from '../pics/drums/1.webp';
import dm2 from '../pics/drums/2.webp';
import dm3 from '../pics/drums/3.webp';
import dm4 from '../pics/drums/4.webp';
import dm5 from '../pics/drums/5.webp';
import dm6 from '../pics/drums/6.webp';
import dm7 from '../pics/drums/7.webp';
import dm8 from '../pics/drums/8.webp';
import dm9 from '../pics/drums/9.webp';
import dm10 from '../pics/drums/10.webp';

const keyboardPage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: dm1, id: 1, name: 'Mapex Armory',description: 'Shell Pack', price: '$999.00', },
        { imgSrc: dm2, id: 2, name: 'Ludwig Questlove',description: 'Complete Drum', price: '$499.00', },
        { imgSrc: dm3, id: 3, name: 'DW DWe',description: 'Drum Kit Bundle ', price: '$10,500.00', },
        { imgSrc: dm4, id: 4, name: 'Tama Imperialstar ',description: 'Complete Drum Set ', price: '$820.00', },
        { imgSrc: dm5, id: 5, name: 'Yamaha SBP2F50',description: 'Shell Pack ', price: '$749.99', },
        { imgSrc: dm6, id: 6, name: 'Pearl Roadshow ',description: 'Complete Drum ', price: '$659.99', },
        { imgSrc: dm7, id: 7, name: 'Yamaha SBP2F50',description: 'Shell Pack ', price: '$799.00', },
        { imgSrc: dm8, id: 8, name: 'DW Collector\'s Series ',description: 'Shell Pack ', price: '$5,799.00', },
        { imgSrc: dm9, id: 9, name: 'DW DDFP2214GS',description: 'Shell Pack ', price: '$1,299.00', },
        { imgSrc: dm10, id: 10, name: 'Pearl Roadshow',description: 'Complete Drum ', price: '$999.00', },
    ]

    return (
        <>
        <NavBarHead />

        {/* keyboards  */}
        <h1 className='productHead'>Keyboard</h1>

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

        <Footer></Footer>
        </>
    )
}

export default keyboardPage;