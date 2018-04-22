import React, { Component } from 'react';
import image1 from '../images/apple-store.png';
import image2 from '../images/play-store.png';
import image3 from '../images/software.svg';


class Homepage extends Component {
    render() {
        return (
          <div>
            <div className="banner row align-items-center justify-content-center">
              <div className="text-center text-white">
                <h1 className="display-4">Anonimo!</h1>
                <p className="lead">You want to share your experience without revealing your identity? Download Anonimo today!</p>
              </div>
            </div>

            <div className="container-fluid">
              <div className="description text-center">
                <div className="row">
                  <div className="col">
                    <h6>Download the App</h6>
                    <i className="fa fa-download icon"></i>
                  </div>
                  <div className="col">
                    <h6>Sign Up</h6>
                    <i className="fa fa-user icon"></i>
                  </div>
                  <div className="col">
                    <h6>Make posts and see other posts by users</h6>
                    <i className="fa fa-users icon"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid fact bg-primary">
              <div>
                <h6 className="text-white text-center">Sign up with a nick name and keep your identity private. With our block chain technology your identity is safe!</h6>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="arrow-down"></div>
            </div>

            <div className="container-fluid download">
              <div className="row align-items-center justify-content-center">
                <div className="col">
                  <img src={image1} alt="apple store" className="img-fluid"/>
                    <img src={image2} alt="play store" className="img-fluid"/>
				        </div>
                <div className="col text-center">
                      <h5>Our Mobile App</h5>
                      <img src={image3} alt="mobile app" className="img-fluid download-img"/>
				        </div>
              </div>
		        </div>

          </div>
        );
    }
}

export default Homepage;
