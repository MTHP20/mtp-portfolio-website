import React from "react";
import '../App.css';
import './home.css';
import profile from '../images/mainPhoto.jpg';
import { Link } from 'react-router-dom';


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
                    <img src={profile} class="profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;