import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class Crispr extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s1">
                    </div>
                    <div className="col s11">
                        <h2> SC-462 Introduction to Synthetic Biology</h2>
                        <h4>Prof Manish K. Gupta</h4>
                    </div>
                </div>
                <hr color="#665451"/>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="../assets/crispr.jpg" width="30%" height="170px" />
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://sanket-224.github.io/#/introduction_to_crispr">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s1">
                        </div>

                        <div className="col s3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="../assets/hiv.jpg" width="30%" height="30%" />
                                {/*}    <span className="card-title">Card Title</span> */}
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="/#/">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="../assets/sol1.jpg" width="30%" height="30%" />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="/#/">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s1">
                        </div>

                        <div className="col s3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="../assets/receptor2.png" width="30%" height="30%" />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="/#/">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


                );
    }
}


 module.exports = Crispr;
