import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// guitar items
import gui1 from '../pics/guitars/1.jpg';
import gui2 from '../pics/guitars/2.webp';
import gui3 from '../pics/guitars/3.webp';
import gui4 from '../pics/guitars/4.webp';
import gui5 from '../pics/guitars/5.webp';
import gui6 from '../pics/guitars/6.webp';
import gui7 from '../pics/guitars/7.webp';
import gui8 from '../pics/guitars/8.webp';
import gui9 from '../pics/guitars/9.webp';
import gui10 from '../pics/guitars/10.webp';

const guitarPage = () => {

    // guitar section
    const guitarItems = [
        { imgSrc: gui6, id: 6, name: 'Takamine GD-37CE',description: 'Acoustic Electric Guitar ', price: '$949.99', },
        { imgSrc: gui1, id: 1, name: 'Baritone',description: 'Electric Guitar', price: '$829.00', },
        { imgSrc: gui2, id: 2, name: 'Baritone',description: 'Electric Guitar', price: '$1,199.00', },
        { imgSrc: gui3, id: 3, name: 'Baritone',description: 'Electric Guitar ', price: '$1,799.00', },
        { imgSrc: gui4, id: 4, name: 'Jackson Pro Plus',description: 'Electric Guitar ', price: '$1,499.00', },
        { imgSrc: gui5, id: 5, name: 'D\'Angelico Premier',description: 'Acoustic Electric Guitar ', price: '$249.99', },
        { imgSrc: gui7, id: 7, name: 'Ovation Elite',description: 'Acoustic Electric Guitar ', price: '$589.00', },
        { imgSrc: gui8, id: 8, name: 'Breedlove ECO',description: 'Acoustic Electric Guitar ', price: '$799.00', },
        { imgSrc: gui9, id: 9, name: 'Fender American',description: 'Precision Bass V ', price: '$1,999.00', },
        { imgSrc: gui10, id: 10, name: 'Ibanez Gio',description: 'Bass Guitar ', price: '$199.00', },
    ]

    return (
        <>

        <NavBarHead />

        {/* guitars  */}
        <h1 className='productHead'>Guitar</h1>

        <div className='guitarCon productCon'>
            {guitarItems.map(item => (
                <div key={item.id} className='guitarItem'>
                    <img src={item.imgSrc} alt={item.name} className='guitarImg' />
                    <h3 className='guitarName'>{item.name}</h3>
                    <p className='guitarDescription'>{item.description}</p>
                    <p className='guitarPrice'>{item.price}</p>
                    <a href='#' className='seeMore'>See More</a>
                </div>
            ))}
        </div>

        <Footer></Footer>
        </>
    )
}

export default guitarPage;