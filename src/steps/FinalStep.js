import React, { Component } from 'react'

class FinalStep extends Component {
  state = {
    loaded: false,
    processed: false
  }

  componentDidMount () {
    /**
      This piece of code just mimics a typical "loading" flow.
      It also makes sure that our loader appears only after the flip animation ends.
    */
    setTimeout(() => {
      this.setState({ loaded: true }) // show spinner

      setTimeout(() => {
        this.setState({ processed: true }) // show thank-you message
      }, 2000)
    }, 400)
  }

  render () {
    const { loaded, processed } = this.state

    return (
      <div className='final-step'>
        {(loaded && !processed) ? (
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        ) : null}
        {processed ? (
          <div>Thanks!</div>
        ) : ''}
      </div>
    )
  }
}

export default FinalStep
