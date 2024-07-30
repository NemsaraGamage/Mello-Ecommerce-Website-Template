import React, { useState } from 'react';
import '../styles.css'
import NavBarHead from "../NavBar";
import Footer from "../Footer";

// npm run deploy

import op1 from '../pics/options/1.png';
import op2 from '../pics/options/2.png';
import op3 from '../pics/options/3.png';
import op4 from '../pics/options/4.png';
import op5 from '../pics/options/5.png';
import op6 from '../pics/options/6.png';
import op7 from '../pics/options/7.png';
import op8 from '../pics/options/8.png';

const mainPage = () => {

    const items = [
        { name: 'Guitars', imgSrc: op1 },
        { name: 'Studio & Recording', imgSrc: op2 },
        { name: 'Drums', imgSrc: op3 },
        { name: 'Bass', imgSrc: op4 },
        { name: 'Keyboards', imgSrc: op5 },
        { name: 'Live Sound & Lights', imgSrc: op6 },
        { name: 'Microphones', imgSrc: op7 },
        { name: 'DJ Equipment', imgSrc: op8 },
        
      ];

    return (
        <>
            <NavBarHead />

            <div className='optionCon'>
                <h3>We Got It All!</h3>
                <div className="item-grid">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                        <div className="item-image-container">
                            <img src={item.imgSrc} alt={item.name} className="item-image" />
                        </div>
                        <div className="item-name">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* <Footer /> */}
        </>
    );
};

export default mainPage;
