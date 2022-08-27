import React from 'react';
import '../styles/styles.css';
import SideNav from '../components/SideNav';

const Skills = () => {
  return (
    
      <div className="container-fluid">
        <div><br /><br /></div>
        <div className="row">
            <div className="col-md-3">
                <SideNav />          
            </div>

            <div className="col-md-9 ">               

                <div className="row form-group">
                    
                    <div className="col-md-8 skillSet">
                        <span className="leftBorder"></span>
                        <h3>Skills proficiency wise</h3><br/><br/>

                        <div className="row">
                            <div className="col-md-4 col-4">
                                <p>HTML</p>
                            </div>
                            <div className="col-md-8 col-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"90%"}}>90%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>CSS</p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"90%"}}>90%</div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="col-md-4">
                                <p>Bootstrap </p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"80%"}}>80%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>SASS/SCSS</p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"70%"}}>70%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>JavaScript</p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"70%"}}>70%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>React.Js</p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"70%"}}>70%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>React Native</p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"40%"}}>40%</div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-4">
                                <p>Github</p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{width:"60%"}}>60%</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
      </div>
    
  )
}

export default Skills;