import React, { Component } from 'react';
import './HomeComponent.css'

class HomeComponent extends Component {
    render() {
        return (
            <div className='home-container'>
                <h2>Quizz App</h2>
                <button>Play</button>
            </div>
        );
    }
}

export default HomeComponent;