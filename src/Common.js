import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = ({name,btname,visit,imgsrc}) => {
    return (
        <div>
            <section id="header" className='d-flex align-items-center'>
            <div className='coontainer-fluid'>
                <div className="row">
                    <div className='col-10 mx-auto'>
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 d-flex justify-content-center flex-column order-lg-1">
                            <h1>{name}<strong className='brand-name'> Sudeb karmokar</strong></h1>
                            <h2 className='my-3'>
                                we are the team of talented developer making websites
                            </h2>
                            <div className="mt-3">
                                <NavLink to={visit} className='btn-get-started'>{btname}</NavLink>
                            </div>
                        </div>
                        
                        <div className="col-lg-6  order-1 order-lg-2 header-img">
                            <img src={imgsrc} className='img-fluid animated' alt="img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Common;