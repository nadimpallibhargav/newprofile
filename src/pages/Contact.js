import React from 'react';
import '../styles/styles.css';
import SideNav from '../components/SideNav';

const Contact = () => {
  return (
    
      <div className="container-fluid">
        <div><br/><br/></div>
        <div className="row">
          <div className="col-md-3">
            <SideNav />          
          </div>

            <div className="col-md-9 removePaddingleft">
                <div className="row form-group" id="ajaxRow">
                    

                    <div className="col-md-12">
                    <div className="intro form-group">
                        <h3 className="secondH3">Thankyou for visiting my profile.</h3>
                        <h3 className="secondH3">kindly drop in a message to contact!</h3>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-4">
                        <br />
                        <div className="alert alert-dark">
                            <strong>Contact Details!</strong>
                        </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-md-8">
                        <div className="pBox paddingTopPbox">
                            <div className="row exp pb-3">
                            <div className="col-md-3">
                                <div className="expyear">
                                Email :
                                </div>
                            </div>
                            <div className="col-md-7 text-left">
                                <a href="mailto:bhargavraju98@gmail.com"
                                >
                                    bhargavraju98@gmail.com
                                </a>
                            </div>
                            <div className="col-md-2"></div>
                            </div>
                            
                            <div className="row exp pb-3">
                            <div className="col-md-3">
                                <div className="expyear">
                                Mobile :
                                </div>
                            </div>
                            <div className="col-md-7 text-left">
                                <a href="tel:916301725336">+91 63017 25336</a>
                            </div>
                            <div className="col-md-2"></div>
                            </div>
                            
                            <div className="row exp pb-3">
                            <div className="col-md-3">
                                <div className="expyear">
                                GitHub :
                                </div>
                            </div>
                            <div className="col-md-7 text-left">
                                <a
                                target="_blank"
                                href="https://github.com/nadimpallibhargav"
                                >
                                github.com/nadimpallibhargav
                                </a>
                            </div>
                            <div className="col-md-2"></div>
                            </div>
                            
                        </div>
                        </div>

                        <div className="col-md-6"></div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-4">
                        <br />
                        <div className="alert alert-dark">
                            <strong>Social Profiles</strong>
                        </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-md-8">
                        <div className="pBox paddingTopPbox">
                            <div className="row exp pb-3">
                            <div className="col-md-3">
                                <div className="expyear">
                                Linkedin :
                                </div>
                            </div>
                            <div className="col-md-9 text-left">
                                <a href="https://www.linkedin.com/in/nadimpalli-bhargav-0a65a3181/">
                                    https://www.linkedin.com/in/nadimpalli-bhargav-0a65a3181/
                                </a>
                            </div>
                            </div>
                            
                        </div>
                        </div>

                        <div className="col-md-6"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                        <div className="pBox paddingTopPbox">
                            <div className="row exp pb-3">
                            <div className="col-md-3">
                                <div className="expyear">
                                whatsapp :
                                </div>
                            </div>
                            <div className="col-md-9 text-left">
                                +91 63017 25336                        
                            </div>
                            </div>
                            
                        </div>
                        </div>

                        <div className="col-md-6"></div>
                    </div>
                    
                    </div>

                    
                </div>            
            </div>
        </div>
      </div>
    
  )
}

export default Contact;