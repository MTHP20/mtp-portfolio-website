import React from "react";
import '../App.css';
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

    const firstRowImages = images.slice(0, 4);
    const secondRowImages = images.slice(4, 9);
    const thirdRowImages = images.slice(9, 14);
    const fourthRowImages = images.slice(14, 18);
    const fifthRowImages = images.slice(18, 21);
    const sixthRowImages = images.slice(21, 23);
    const seventhRowImages = images.slice(23, 26);


    return (
        <div class="body">
            <CContainer>
                <CRow className="justify-content-center mb-5">
                    {firstRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
                <CRow className="justify-content-center mb-5">
                    {secondRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
                <CRow className="justify-content-center mb-5">
                    {thirdRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
                <CRow className="justify-content-center mb-5">
                    {fourthRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
                <CRow className="justify-content-center mb-5">
                    {fifthRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
                <CRow className="justify-content-center mb-5">
                    {sixthRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
                <CRow className="justify-content-center mb-5">
                    {seventhRowImages.map((image, index) => (
                        <CCol
                            key={index + 5}
                            style={{ flex: '0 0 20%' }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src={image}
                                alt={`Icons${index + 6}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            />
                        </CCol>
                    ))}
                </CRow>
            </CContainer>
        </div>
    );
};

export default Skills;

