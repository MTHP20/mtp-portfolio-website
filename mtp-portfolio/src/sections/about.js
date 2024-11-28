import React from "react";
import '../App.css';
import './about.css';
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/react';

const About = () => {
    return (
        <div className="body">
            <CTabs activeItemKey={1}>
                <CTabList variant="pills" className="p-3">
                    <CTab className="w-50 btn-warning" itemKey={1}>EDUCATION</CTab>
                    <CTab className="w-50 btn-warning" itemKey={2}>EXPERIENCE</CTab>
                </CTabList>
                <CTabContent>
                    <CTabPanel className="p-3" itemKey={1}>
                        Education content goes here.
                    </CTabPanel>
                    <CTabPanel className="p-3" itemKey={2}>
                        Experience content goes here.
                    </CTabPanel>
                </CTabContent>
            </CTabs>
        </div>
    );
};

export default About;
