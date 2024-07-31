import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// options imgs
import op1 from '../pics/options/1.png';
import op2 from '../pics/options/2.png';
import op3 from '../pics/options/3.png';
import op4 from '../pics/options/4.png';
import op5 from '../pics/options/5.png';
import op6 from '../pics/options/6.png';
import op7 from '../pics/options/7.png';
import op8 from '../pics/options/8.png';

// banner
import ban1 from '../pics/ban1.jpg';
import ban1Change from '../pics/ban1Resize.jpg';
import ban2 from '../pics/ban2.jpg';
import ban3 from '../pics/ban3.jpg';

const MainPage = () => {
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

    // State to manage which banner image to display
    const [bannerSrc, setBannerSrc] = useState(window.innerWidth <= 790 ? ban1Change : ban1);

    // Effect to update the banner image on window resize
    useEffect(() => {
        const handleResize = () => {
            setBannerSrc(window.innerWidth <= 890 ? ban1Change : ban1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <NavBarHead />

            <div className="header1">
                <h1>Welcome to Melo!</h1>
                <p>All Your Musical Desires at One Place.</p>
            </div>

            {/* Instrument options */}
            <div className="optionCon">
                <h3>-- We Got It All --</h3>
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

            {/* Banner */}
            <div className="banner1">
                <img src={bannerSrc} alt="banner1" style={{ width: '100%' }} />
            </div>

            <div className='banner2'>
                <div className='ban2Con'>
                    <img src={ban2}></img>
                </div>
                <div className='ban2com'>
                    <img src={ban3}></img>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
};

export default MainPage;