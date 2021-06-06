import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import VMC from './inc/Vmc';
import service01 from '../images/service01.jpg'

function Home(){
    return (
        <div>
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                       <div className="com-md-12 text-center">
                            <h3 className="main-hedding">Advanced Level Physics</h3>
                            <div className="under-line mx-auto"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <Link to="./about" className="btn btn-warning shadow">Read More</Link>
                        </div> 
                    </div>
                </div>
            </section>

            <VMC/>

            {/* our service */}

            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="com-md-12 md-4  text-center">
                            <h3 className="main-hedding">Our Services</h3>
                            <div className="under-line mx-auto"></div>
                        </div>  
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img  src={service01} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="under-line"></div>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read more</Link>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img  src={service01} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="under-line"></div>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read more</Link>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img  src={service01} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="under-line"></div>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read more</Link>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;