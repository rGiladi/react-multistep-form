import React, { Component } from 'react'
import GithubCorner from './GithubCorner'
import MultiStepForm from './MultiStepForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <GithubCorner />
        <MultiStepForm />
      </div>
    )
  }
}

export default App;
