import React from 'react';
import '../styles/styles.css';
import SideNav from '../components/SideNav';

const About = () => {
  return (
    
      <div className="container-fluid">
        <div><br /><br /></div>
        <div className="row">
          <div className="col-md-3">
            <SideNav />          
          </div>

          <div className="col-md-9 removePaddingleft">

            <div className="row form-group" id="ajaxRow">
                
                
                <div className="aboutSec col-md-12">
                    <div className="intro form-group">
                        <h3 className="headone"> Hi I'm <span>Nadimpalli Bhargav</span></h3>
                        <h3 className="headtwo"> I'm a Front-end Web Developer.</h3>
                    </div>
                                            
                    

                    <div className="row form-group">
                        <div className="col-md-4">
                            <br />
                            <div className="alert alert-dark">
                                <strong>Work experience</strong>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row exp">
                        <div className="col-md-3">
                            <div className="expyear">
                                February 2022 - Present
                            </div>
                        </div>
                        <div className="col-md-9 text-left">
                            <ul>
                                <li>
                                    <b>Product Engineer </b> - Sketch Brahma Technologies
                                </li>
                                <li>Developing responsive and optimized UI/UX designs. </li>
                                <li>Regularly updating the clients about project status. </li>
                            </ul>
                        </div>
                        
                    </div>                    
                    
                    <div className="row exp">
                        <div className="col-md-3">
                            <div className="expyear">
                                November 2020 - February 2022
                            </div>
                        </div>
                        <div className="col-md-9 text-left">
                            <ul>
                                <li>
                                    <b>UI Developer </b> - Immersive Radical Digimedia
                                </li>
                                <li>Responsible for developing the responsive and optimized websites. </li>                                    
                                <li>Interaction with clients for regular website updates.</li>                                    
                            </ul>
                        </div>
                        
                    </div>                    
                    

                    <div className="row form-group">
                        <div className="col-md-4">
                            <br />
                            <div className="alert alert-dark">
                                <strong>Education & Training</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row exp">
                        <div className="col-md-3">
                            <div className="expyear">
                                02/2020 - 04/2020
                            </div>
                        </div>
                        <div className="col-md-8 text-left">
                            <ul>
                                <li>
                                    Completed Web Technologies Training From " Naresh i Technologies "
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    
                    <div className="row exp">
                        <div className="col-md-3">
                            <div className="expyear">
                                2016 - 2020
                            </div>
                        </div>
                        <div className="col-md-8 text-left">
                            <ul>
                                <li>
                                    B.Tech(CS) From Sir Vishveshwaraiah Institute of Science & Technology, madanapalle.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    
                </div>

                
            </div>
                
            </div>
        </div>
      </div>
    
  )
}

export default About;