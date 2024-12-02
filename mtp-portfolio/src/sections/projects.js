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
                        <a href="https://github.com/MTHP20/MAPS-APPLICATION" target="_blank" rel="noopener noreferrer">
                            <CCarouselCaption className="d-none d-md-block color auto-width-caption">
                                <h5>HTML5 Offline Mapping Application</h5>
                                <p>Maps Application that leverages HTML5 technologies and <br></br> OpenStreetMap which is capable of working in an offline state</p>
                            </CCarouselCaption>
                        </a>
                    </CCarouselItem>
                    <CCarouselItem>
                        <video className="d-block w-100" autoPlay muted loop>
                            <source src={vid2} type="video/mp4" />
                        </video>
                        <a href="https://github.com/MTHP20/ChatApp" target="_blank" rel="noopener noreferrer">
                            <CCarouselCaption className="d-none d-md-block color auto-width-caption">
                                <h5>C# Chat Application</h5>
                                <p>Basic Chat Application that can connect multiple users <br /> to send and receive messages on a server.</p>
                            </CCarouselCaption>
                        </a>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    );
};

export default Projects;