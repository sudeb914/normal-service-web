import React from 'react';
import Common from './Common';
import Web from './images/business-man.svg';
const Home = () => {
    return (
        <div>
          <Common
                name='Grow your business with'
                imgsrc={Web}
                visit='/service'
                btname='Get Started'
          ></Common>
        </div>
    );
};

export default Home;