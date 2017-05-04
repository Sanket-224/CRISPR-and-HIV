import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class introduction_to_crispr extends Component {
    render() {
        return (
            <div>
                <h1> CRISPR </h1>
                <hr color="#665451"/>
                <br />
                <br />
                <br />
                <div class="video-container" id="noob">
                    <iframe width="700" height="500" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="10" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}
module.exports = introduction_to_crispr;