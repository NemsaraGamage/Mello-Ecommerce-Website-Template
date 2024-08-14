import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ReactStars from "react-rating-stars-component";

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
import ban4 from '../pics/ban4.jpg';
import ban4Change from '../pics/ban4Resize.jpg';
import ban5 from '../pics/ban5.jpg';
import ban6 from '../pics/ban6.jpg';

// trending
import tren1 from '../pics/trending/1.jpg';
import tren2 from '../pics/trending/2.png';
import tren3 from '../pics/trending/3.jpg';
import tren4 from '../pics/trending/4.jpg';
import tren5 from '../pics/trending/5.webp';
import tren6 from '../pics/trending/6.webp';
import tren7 from '../pics/trending/7.jpg';
import tren8 from '../pics/trending/8.jpg';
import tren9 from '../pics/trending/9.jpg'

// new items
import nwContent1 from '../pics/new/1.jpg';
import nwContent2 from '../pics/new/2.jpg';
import nwContent3 from '../pics/new/3.jpg';
import nwContent4 from '../pics/new/4.jpg';
import nwContent5 from '../pics/new/5.jpg';
import nwContent6 from '../pics/new/6.jpg';
import nwContent7 from '../pics/new/7.jpg';
import nwContent8 from '../pics/new/8.webp';
import nwContent9 from '../pics/new/9.webp';

// cata
import cata1 from '../pics/cata/1.png';
import cata2 from '../pics/cata/2.png';
import cata3 from '../pics/cata/3.png';
import cata4 from '../pics/cata/4.png';
import cata5 from '../pics/cata/5.jpg';
import cata6 from '../pics/cata/6.png';

// contact help
import musicPeople from '../pics/msuic_ppl.png'

// guitar items
import gui1 from '../pics/guitars/1.jpg';
import gui2 from '../pics/guitars/2.webp';
import gui3 from '../pics/guitars/3.webp';
import gui4 from '../pics/guitars/4.webp';
import gui5 from '../pics/guitars/5.webp';
import gui6 from '../pics/guitars/6.webp';
import gui7 from '../pics/guitars/7.webp';
import gui8 from '../pics/guitars/8.webp';

const MainPage = () => {
    // ------------------------------- instrument option 
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

    // ------------------------------- Banners resize

    // State to manage which banner image to display
    const [banner1Src, setBanner1Src] = useState(window.innerWidth <= 790 ? ban1Change : ban1);

    // Effect to update the banner image on window resize
    useEffect(() => {
        const handleResize = () => {
            setBanner1Src(window.innerWidth <= 890 ? ban1Change : ban1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // State to manage which banner image to display
    const [banner4Src, setBanner4Src] = useState(window.innerWidth <= 790 ? ban4Change : ban4);

    // Effect to update the banner image on window resize
    useEffect(() => {
        const handleResize = () => {
            setBanner4Src(window.innerWidth <= 890 ? ban4Change : ban4);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ------------------------------- trending sec

    const trending = [
        { trendImg: tren1, name: ' Dave Grohl DG-335 ', description: ' Semi-hollowbody Electric ', color: 'Pelham Blue', price: '$2,224', rating: 4 },
        { trendImg: tren2, name: 'Fender Player ', description: 'Stratocaster HSS Electric Guitar ', color: 'Aged Cherry Burst with Maple', price: '$625', rating: 3.5 },
        { trendImg: tren3, name: 'Taylor T5z Classic Koa', description: 'Hollowbody Electric Guitar', color: 'Shaded Edgeburst', price: '$1,562', rating: 5 },
        { trendImg: tren4, name: 'Taylor 814ce', description: 'Acoustic-electric Guitar', color: 'Sinker Redwood Top', price: '$4,999', rating: 4.5 },
        { trendImg: tren5, name: 'Moog Subsequent 37 ', description: 'Analog Synthesizer', color: 'Black with Wood', price: '$1,899', rating: 4 },
        { trendImg: tren6, name: 'Moog Minimoog M-D ', description: 'Analog Synthesizer', color: 'Appalachian Cherry', price: '$2,999', rating: 3.5 },
        { trendImg: tren7, name: 'Tama Imperialstar IE52C', description: '5-piece Complete Drum', color: 'Black Oak Wrap', price: '$634', rating: 5 },
        { trendImg: tren8, name: 'Pioneer DJ XDJ-RX3', description: 'Digital DJ System', color: 'Jett Black', price: '$2,099', rating: 3.5 },
        { trendImg: tren9, name: 'Elektron Digitakt', description: 'Drum Computer and Sampler', color: 'Jett Black', price: '$999', rating: 5 },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1020, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 811, min: 0 },
            items: 2
        },
        mobile2: {
            breakpoint: { max: 550, min: 0 },
            items: 1
        },
    };

    // ------------------------------- "whats new?" sec

    const whatsNew = [
        { trendImg: nwContent1, name: 'Yamaha TRBX304', description: ' Bass Guitar', color:'Mist Green', price: '$422', rating: 3.5 },
        { trendImg: nwContent2, name: 'Fender Player ', description: 'Jazz Bass V ', color: ' Pau Ferro Fingerboard', price: '$1,149', rating: 3 },
        { trendImg: nwContent3, name: 'Roland V-Drums', description: 'Electronic Drum Set', color: 'Black', price: '$999', rating: 5 },
        { trendImg: nwContent4, name: 'Yamaha YAS-26', description: 'Student Alto Saxophone', color: 'Gold Lacquer', price: '$2,550', rating: 4.5 },
        { trendImg: nwContent5, name: 'Yamaha YCL-450N', description: 'Nickel Keys', color: 'Black', price: '$1,643', rating: 4 },
        { trendImg: nwContent6, name: 'Akai Professional MPC', description: 'Sampler and Sequencer', color: 'Red', price: '$699', rating: 5 },
        { trendImg: nwContent7, name: 'Nord Stage 4', description: 'Stage Keyboard', color: 'Red', price: '$5,399', rating: 5 },
        { trendImg: nwContent8, name: 'Shure SM7B', description: 'Dynamic Vocal Microphone', color: 'Black', price: '$400', rating: 3.5 },
        { trendImg: nwContent9, name: 'Sennheiser e 825-S', description: ' Dynamic Vocal Microphoner', color: 'Black', price: '$76', rating: 5 },
    ];

    // ------------------------------- instrument option 
    const cataItems = [
        { name: 'Guitars', imgSrc: op1 },
        { name: 'Studio & Recording', imgSrc: op2 },
        { name: 'Drums', imgSrc: op3 },
        { name: 'Bass', imgSrc: op4 },
        { name: 'Keyboards', imgSrc: op5 },
        { name: 'Live Sound & Lights', imgSrc: op6 },
        { name: 'Microphones', imgSrc: op7 },

        { name: 'DJ Equipment', imgSrc: op8 },
        { name: 'Home Audio', imgSrc: cata1 },
        { name: 'Band & Orchestra', imgSrc: cata2 },
        { name: 'Classroom Instruments', imgSrc: cata3 },
        { name: 'Accessories', imgSrc: cata4 },
        { name: 'Software & Plug-ins', imgSrc: cata5 },
        { name: 'Lighting', imgSrc: cata6 },
    ];

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
    ]
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 432);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 487);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const responsiveGuiSec = {
        mobile: {
            breakpoint: { max: 487, min: 0 },
            items: 1
        }
    };


    return (
        <>
            <NavBarHead />

            <div className="header1">
                <h1>Welcome to Mello!</h1>
                <p>All Your Musical Desires and Needs at One Place.</p>
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
                <img src={banner1Src} alt="banner1" style={{ width: '100%' }} />
            </div>

            <div className='banner2'>
                <div className='ban2Con'>
                    <img src={ban2}></img>
                </div>
                <div className='ban2com'>
                    <img src={ban3}></img>
                </div>
            </div>

            {/* Trending Carousel */}
            <div className='carouselCon'>
                <h3>-- Trending --</h3>
                <Carousel responsive={responsive}>
                    {trending.map((trend, index) => (
                        <div key={index} className="carousel-item">
                            <img src={trend.trendImg} alt={trend.name} />
                            <p>{trend.name}</p>
                            <p>{trend.description}</p>
                            <p>{trend.color}</p> 
                                  
                            <div className="caroPrice-button-container">
                                <p>{trend.price}</p>
                                <ReactStars
                                count={5}
                                value={trend.rating}
                                size={24}
                                activeColor="#E3963E"
                                isHalf={true}
                                edit={false} // to make it read-only
                            />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            
            {/* new content Carousel */}
            <div className='carouselCon newContentCon'>
                <h3>-- Whats New? --</h3>
                <Carousel responsive={responsive}>
                    {whatsNew.map((trend, index) => (
                        <div key={index} className="carousel-item">
                            <img src={trend.trendImg} alt={trend.name} />
                            <p>{trend.name}</p>
                            <p>{trend.description}</p>
                            <p>{trend.color}</p> 
                                  
                            <div className="caroPrice-button-container">
                                <p>{trend.price}</p>
                                <ReactStars
                                count={5}
                                value={trend.rating}
                                size={24}
                                activeColor="#E3963E"
                                isHalf={true}
                                edit={false} 
                            />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* 4th banner */}
            <div className='ban4Con'>
                <img src={banner4Src} style={{ width: '100%' }}></img>
            </div>

            {/* guitar section */}
            <h3 className='guitarHead'>-- Guitars --</h3>
            <div className='guitarSection'>  
                {isMobile ? (
                    <Carousel responsive={responsiveGuiSec}>
                        {guitarItems.map(item => (
                            <div key={item.id} className='guitarItem guitarCarCon'>
                                <img src={item.imgSrc} alt={item.name} className='guitarImg' />
                                <h3 className='guitarName'>{item.name}</h3>
                                <p className='guitarDescription'>{item.description}</p>
                                <p className='guitarPrice'>{item.price}</p>
                                <a href='#' className='seeMore'>See More</a>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div className='guitarCon'>
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
                )}
            </div>

            {/* banner5 */}
            <div className='banner2 banner5'>
                <div className='ban2Con'>
                    <img src={ban5}></img>
                </div>
                <div className='ban2com'>
                    <img src={ban6}></img>
                </div>
            </div>

            {/* Catagories */}
            <div className="optionCon cataCon">
                <h3>-- Catagories --</h3>
                <div className="item-grid">
                    {cataItems.map((item, index) => (
                        <div key={index} className="item">
                            <div className="item-image-container cata-image-container">
                                <img src={item.imgSrc} alt={item.name} className="item-image" />
                            </div>
                            <div className="item-name">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact help */}
            <div className='contactHelpCon'>
                <h3>Need Help Picking an Instrument?</h3>
                <img src={musicPeople}></img>
                <p>We understand that choosing the right musical instrument can be overwhelming. 
                    That's why we're here to help! Our expert team is dedicated to guiding you through 
                    every step of the process, offering personalized recommendations and in-depth product 
                    insights tailored to your unique needs.</p>
            </div>

            {/* Newsletter */}
            <div className="newsCon">
              <h3>Join Our Newsletter!</h3>
              <p>Subscribe to our newsletter to stay updated on the latest news and offers!</p>
              <form className="newsletterForm">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            <Footer />
        </>
    );
};

export default MainPage;