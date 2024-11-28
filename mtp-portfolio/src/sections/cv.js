import React, { useState } from 'react';
import '../App.css';
import './cv.css';
import pdf from '../images/CV.pdf'
import { BsLinkedin, BsGithub, BsLink } from "react-icons/bs";



const CV = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isAnimating, setAnimating] = useState(false);

    const toggleModalVisibility = () => {
        if (isModalVisible) {
            setAnimating(true);
            setTimeout(() => {
                setModalVisible(false);
                setAnimating(false);
            }, 300);
        } else {
            setModalVisible(true);
        }
    };

    return (
        <div className="body">
            <div className="intro">
                <div>
                    <h1 className='cvTitle' onClick={toggleModalVisibility}>VIEW MY CV!</h1>
                    {isModalVisible && (
                        <div className="modalOverlay" onClick={toggleModalVisibility}>
                            <div
                                className={`modalContent ${isAnimating ? 'slide-out' : 'slide-in'}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <iframe src={pdf} title="My CV" />
                            </div>
                        </div>
                    )}
                    <div className="d-flex justify-content-center gap-4">
                        <a href="https://www.linkedin.co.uk/in/mthp/" style={{ textDecoration: 'none' }}>
                            <button style={{ backgroundColor: '#0A66C2', color: 'white' }}
                                className="btn d-flex align-items-center gap-2">
                                <BsLinkedin /> LinkedIn
                            </button>
                        </a>

                        <a href="https://github.com/mthp20" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-secondary d-flex align-items-center gap-2">
                                <BsGithub /> GitHub
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;