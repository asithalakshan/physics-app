import React from 'react';

function Contactus(){
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Home / Contact Us</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className='container'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb 1">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name"/>
                                    </div>                                    
                                    <div className="form-group">
                                        <label className="mb 1">Contact No.</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Contact Number"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb 1">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb 1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow " >Send</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heding">Contact Info</h5>
                                    <div className="underline"></div>

                                    <p># 50, Galle Road, Moratuwa</p>
                                    <p>+94 75 552 3994</p>
                                    <p>+94 15 552 3991</p>
                                    <p>asitha@gmail.com</p>
                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contactus;
