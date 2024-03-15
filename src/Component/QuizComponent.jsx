import React, { Component } from 'react';
import './QuizComponent.css'

class QuizComponent extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <h2 className='heading'>Question</h2>
                    <h5 className='question-number'>1 of 15</h5>
                    <p className='question'>Which one is the only mammal that can jump?</p>
                    <div className='options'>
                        <div>Dog</div>
                        <div>Elephant</div>
                        <div>Goat</div>
                        <div>Lion</div>
                    </div>
                    <div className='goToButtons'>
                        <div className='previous'>Previous</div>
                        <div className='next'>Next</div>
                        <div className='quit'>Quit</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizComponent;