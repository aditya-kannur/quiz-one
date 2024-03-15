import React from 'react'
import './App.css'
import HomeComponent from './Component/HomeComponent'
import QuizComponent from './Component/QuizComponent'
import ResultComponent from './Component/ResultComponent'

function App() {

  return (
    <>
    <div className='App'>
      <div>
        <HomeComponent/> 
      </div>
      <br />
      <br />
      <div>
        <QuizComponent/>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
    <div>
        <ResultComponent/>
      </div>

    </>
  )
}

export default App