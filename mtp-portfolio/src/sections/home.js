import React from "react";
import '../App.css';
import './home.css';
import './swiper.css';
import profile from '../images/mainPhoto.jpg';
import { Link } from 'react-router-dom';
import { CCol, CRow, CContainer } from '@coreui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../images/spain/1.JPEG';
import img2 from '../images/spain/2.JPEG';
import img3 from '../images/spain/3.JPEG';
import img4 from '../images/spain/4.JPEG';
import img5 from '../images/spain/5.JPEG';
import img6 from '../images/spain/6.JPEG';
import img7 from '../images/spain/7.JPEG';
import img8 from '../images/spain/8.JPEG';
import img9 from '../images/spain/9.JPEG';
import img10 from '../images/spain/10.JPEG';
import img11 from '../images/spain/11.JPEG';
import img12 from '../images/spain/12.JPEG';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const captions = [
    'Caption 1', 'Umbrella Street in Poble Espanyol', 'TOURISTS GO HOME', 'Basílica de la Sagrada Família',
    'Caption 5', 'Caption 6', 'Park Güell', 'Caption 8',
    'Mercat de la Boqueria', 'Fútbol at Park Güell', 'Caption 11', 'Barceloneta Beach'
];

const Home = () => {
    return (
        <div class="body">
            <div class="intro">
                <div class="info">
                    <p class="hi">Hi</p>
                    <p class="big-text">I'm <span class="highlight">Michael</span></p>
                    <p class="big-text">a Front-End Developer</p>
                    <br></br>
                    <p className="info-text">
                        In 2024, I proudly graduated with a degree in Computer Science from Royal Holloway, University of London,
                        following three years of rewarding challenges and growth.
                        <br></br><br></br>
                        Now embarking on my career as a Junior Front-End Developer, I am committed to expanding my portfolio
                        and deepening my expertise in programming languages to deliver innovative, high-quality solutions.
                    </p>
                    <br></br>
                    <div class="d-flex gap-4">
                        <button className="btn btn-dark">CONTACT ME!</button>
                        <Link to="projects"><button className="btn btn-warning">PROJECTS</button></Link>
                    </div>
                </div>
                <div class="picture">
                    <img src={profile} class="profile" alt="profile" />
                </div>
            </div>
            <div class="first section">
                <iframe
                    style={{ borderRadius: '25px' }}
                    src="https://open.spotify.com/embed/track/07jRDsccmmp4BuX3eCjqye?utm_source=generator"
                    width="80%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />            </div>
            <div class="second section">
                <Swiper
                    slidesPerView={2.75}
                    spaceBetween={15}
                    loop={true}
                    pagination={true}
                    navigation={false}
                    modules={[]}
                    className="mySwiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="image-container">
                                <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
                                {captions[index] && !captions[index].startsWith('Caption ') && (
                                    <div className="captionExtra">{captions[index]}</div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Home;