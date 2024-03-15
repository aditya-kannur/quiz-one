import React, { Component } from 'react';
import './ResultComponent.css'

class ResultComponent extends Component {
    render() {
        return (
            <div >
               
                <div className='result-container'>
                <h3 className='result'>Result</h3>
                    
                    <h4 className='feedback'>You need more practice</h4>
                    <h2 className='score'>Your Score is 20%</h2>
                    <div>
                        <p className='stats'>Total number questions</p>
                        <p className='stats-number'>15</p>
                    </div>
                    <div>
                        <p className='stats'>Number of attempted questions</p>
                        <p className='stats-number'>9</p>
                    </div>
                    <div>
                        <p className='stats'>Number of correct answers</p>
                        <p className='stats-number'>3</p>
                    </div>
                    <div>
                        <p className='stats'>number of wring answers</p>
                        <p className='stats-number'>6</p>
                    </div>

                    <div className='buttons'>
                        <button className='play-again'>Play Again</button>
                        <button className='back-home'>Back to home</button>
                    </div>
                    
                </div>
               
                
            </div>
        );
    }
}

export default ResultComponent;