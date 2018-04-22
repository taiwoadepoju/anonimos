import React, { Component } from 'react';
import image4 from '../images/phone.svg';
import image5 from '../images/devices.svg';

class About extends Component {
    render() {
        return (
            <div>
                <div className="page-banner row align-items-center justify-content-center">
                    <div className="text-center text-white">
                        <h1 className="display-5">About Anonimo</h1>
                    </div>
                </div>

		        <div className="container-fluid fact bg-primary">
                    <div>
                        <h6 className="text-white text-center">Superior technology!</h6>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="arrow-down"></div>
                </div>

		        <div className="container-fluid download">
                    <div className="row align-items-center">
                        <div className="col">
                            <img src={image4} alt="about" className="img-fluid about-image"/>
				        </div>
                        <div className="col text-left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore perspiciatis, ipsam assumenda reprehenderit aspernatur, at beatae cum optio facere minus esse explicabo nihil maxime inventore soluta nostrum tempora deserunt quas.</p>
                        </div>
                    </div>
                </div>

		        <div className="container-fluid download2">
                    <div className="row align-items-center">
                        <div className="col text-left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore perspiciatis, ipsam assumenda reprehenderit aspernatur, at beatae cum optio facere minus esse explicabo nihil maxime inventore soluta nostrum tempora deserunt quas.</p>
                        </div>
                        <div className="col">
                            <img src={image5} alt="about" className="img-fluid about-image"/>
    				    </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default About;
