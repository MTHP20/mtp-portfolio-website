import React from "react";
import '../App.css';
import './home.css';
import profile from '../images/mainPhoto.jpg';
import { Link } from 'react-router-dom';
import { CCol, CRow, CContainer } from '@coreui/react';


const Home = () => {
    return (
        <div class="body">
            <div class="intro">
                <div class="info">
                    <p class="hi">Hi</p>
                    <p class="big-text">I'm <span class="highlight">Michael</span></p>
                    <p class="big-text">a Front-End Developer</p>
                    <br></br>
                    <p class="info-text">
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
            <div class="second">
                <CContainer class="contain">
                    <CRow class="yesyes" xs={{ cols: 2 }}>
                        <CCol >
                            My interest in technology began with building computers, leading me to study Computer Science at Royal Holloway. There, I discovered a passion for Java and now aim to expand my expertise by learning new languages and tackling more ambitious projects.
                        </CCol>
                        <CCol >
                            I enjoy coding in HTML and JavaScript, having used them for projects like this portfolio and a Restaurant Management System. My passion for web development drives me to aspire to start a small business and develop websites for local clients.
                        </CCol>
                    </CRow>
                    <CRow class="yesyes" xs={{ cols: 2 }}>
                        <CCol>
                            I've started my career as a Junior Front-End Developer. With a strong interest in technology consultancy, I aim to apply my skills to deliver high-quality IT solutions.
                        </CCol>
                        <CCol>
                            Outside of work, I stay active by playing basketball and exercising at the gym. I also have a passion for music, both listening to and playing it. In the near future, I hope to travel and explore new parts of the world.
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
            {/* <div class="second">

            </div> */}
        </div>
    );
};

export default Home;