import React, { useState, useEffect } from 'react';
import '../App.css';
import './skills.css';
import { CRow, CCol, CContainer } from '@coreui/react';

const Skills = () => {

    const images = [
        require('../images/skills/1.png'),
        require('../images/skills/2.png'),
        require('../images/skills/3.png'),
        require('../images/skills/4.png'),
        require('../images/skills/5.png'),
        require('../images/skills/6.png'),
        require('../images/skills/7.png'),
        require('../images/skills/8.png'),
        require('../images/skills/9.png'),
        require('../images/skills/10.png'),
        require('../images/skills/11.png'),
        require('../images/skills/12.png'),
        require('../images/skills/13.png'),
        require('../images/skills/14.png'),
        require('../images/skills/15.png'),
        require('../images/skills/16.png'),
        require('../images/skills/17.png'),
        require('../images/skills/18.png'),
        require('../images/skills/19.png'),
        require('../images/skills/20.png'),
        require('../images/skills/21.png'),
        require('../images/skills/22.png'),
        require('../images/skills/23.png'),
        require('../images/skills/24.png'),
        require('../images/skills/25.png'),
        require('../images/skills/26.png'),
    ];

    const [loading, setLoading] = useState(true);
    const firstRowImages = images.slice(0, 4);
    const secondRowImages = images.slice(4, 9);
    const thirdRowImages = images.slice(9, 14);
    const fourthRowImages = images.slice(14, 18);
    const fifthRowImages = images.slice(18, 21);
    const sixthRowImages = images.slice(21, 23);
    const seventhRowImages = images.slice(23, 26);
    const [animateRow, setAnimateRow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTimeout(() => setAnimateRow(true), 100);
        }, 500);
    }, []);

    return (
        <div className={`body ${loading ? 'invisible' : ''}`} style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease' }}>            <CContainer>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {firstRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {secondRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {thirdRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {fourthRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {fifthRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {sixthRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
            <CRow className={`justify-content-center mb-5 ${animateRow ? 'slide-in-left' : ''}`}>
                {seventhRowImages.map((image, index) => (
                    <CCol
                        key={index + 5}
                        style={{ flex: '0 0 20%' }}
                        className="d-flex justify-content-center"
                    >
                        <div className="image-container">
                            <img
                                src={image}
                                alt={`Icon${index + 1}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                            <div className="text-overlay">Skill {index + 1}</div>
                        </div>
                    </CCol>
                ))}
            </CRow>
        </CContainer>
        </div>
    );
};

export default Skills;

