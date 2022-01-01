import React from 'react';
import Common from './Common';
import about from './images/about.png'
const About = () => {
    return (
        <div>
            <Common 
                name="Welcome to About page"
                imgsrc={about}
                visit='/contact'
                btname='Contact Now'
            ></Common>
        </div>
    );
};

export default About;