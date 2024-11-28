import React from "react";
import { CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/react'
import '../App.css';
import './projects.css';
import vid1 from '../images/project1.mp4';
import vid2 from '../images/project2.mp4';

const Projects = () => {
    return (
        <div className="body">
            <p class="titleText">Check Out My Projects!</p>
            <div className="intro">
                <CCarousel className="carousel_container" controls dark indicators={false}>
                    <CCarouselItem>
                        <video className="d-block w-100" autoPlay muted loop>
                            <source src={vid1} type="video/mp4" />
                        </video>
                        <CCarouselCaption className="d-none d-md-block color">
                            <h5>HTML5 Offline Mapping Application</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <video className="d-block w-100" autoPlay muted loop>
                            <source src={vid2} type="video/mp4" />
                        </video>
                        <CCarouselCaption className="d-none d-md-block color">
                            <h5>C# Chat Application</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    );
};

export default Projects;