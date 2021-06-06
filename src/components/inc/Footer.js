import React from 'react';
import { Link } from 'react-router-dom';

function Foooter(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/About">About Us</Link></div>
                        <div><Link to="/Contact">Contact Us</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Info</h6>
                        <hr/>
                        <div><p className="text-white mb-1"># 50, Galle Road, Moratuwa</p></div>
                        <div><p className="text-white mb-1">+94 75 552 3994</p></div>
                        <div><p className="text-white mb-1">+94 15 552 3991</p></div>
                        <div><p className="text-white mb-1">asitha@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Foooter;