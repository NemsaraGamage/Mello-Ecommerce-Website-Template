import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// keyboard items
import kw1 from '../pics/keyboard/1.webp';
import kw2 from '../pics/keyboard/2.webp';
import kw3 from '../pics/keyboard/3.webp';
import kw4 from '../pics/keyboard/4.webp';
import kw5 from '../pics/keyboard/5.webp';
import kw6 from '../pics/keyboard/6.webp';
import kw7 from '../pics/keyboard/7.webp';
import kw8 from '../pics/keyboard/8.webp';
import kw9 from '../pics/keyboard/9.webp';
import kw10 from '../pics/keyboard/10.webp';

const keyboardPage = () => {

    // keyboard section
    const keyboardItems = [
        { imgSrc: kw1, id: 1, name: 'Yamaha MODX8+',description: 'Key Synthesizer', price: '$2,199.00', },
        { imgSrc: kw2, id: 2, name: 'Behringer UB-Xa',description: 'Analog Synthesizer', price: '$1,199.00', },
        { imgSrc: kw3, id: 3, name: 'Arturia MiniFreak',description: 'Hybrid Synthesizer ', price: '$500.00', },
        { imgSrc: kw4, id: 4, name: 'Moog One 16-voice ',description: 'Analog Synthesizer ', price: '$8000.00', },
        { imgSrc: kw5, id: 5, name: 'Yamaha Reface CS',description: 'Analog Synthesizer ', price: '$249.99', },
        { imgSrc: kw6, id: 6, name: 'Arturia MicroFreak',description: 'Hybrid Synthesizer ', price: '$349.99', },
        { imgSrc: kw7, id: 7, name: 'Arturia MiniFreak',description: 'Hybrid Synthesizer ', price: '$589.00', },
        { imgSrc: kw8, id: 8, name: 'Roland JUNO-X ',description: '61-key Synthesizer ', price: '$1,799.00', },
        { imgSrc: kw9, id: 9, name: 'Novation MiniNova',description: '37-key Synthesizer ', price: '$299.00', },
        { imgSrc: kw10, id: 10, name: 'ASM Hydrasynth Explorer',description: 'Morphing Synthesizer ', price: '$599.00', },
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