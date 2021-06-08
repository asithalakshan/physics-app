import React from 'react';
import VMC from './inc/Vmc';

function Aboutus(){
    return (
        <div>
            <section className="py-4 bg-my">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Home / About Us</h6>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-hedding">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                    </p>
                </div>
            </section>

            <VMC/>

        </div>
    );
}

export default Aboutus;