import React, { Component } from 'react'
import MagicHeat from 'react-magic-hat'
import { Button } from 'reactstrap'
import steps from './steps'
import FinalStep from './steps/FinalStep'

class MultiStepForm extends Component {
  constructor () {
    super()
    this.state = {
      animating: false,
      submitted: false
    }
  }

  renderFrame = ({ page, activePage, actions }) => {
    const { submitted } = this.state
    const Comp = submitted ? FinalStep : steps[page - 1]
    const isActive = activePage === page ? 'active' : ''
    const isLastStep = activePage === steps.length

    return (
      <div className={isActive} onClick={() => actions.setFrame(page)}>
        <Comp />
        {(isLastStep && !submitted) && <Button onClick={this.handleSubmit}>Submit</Button>}
        {!isLastStep && <Button onClick={e => this.moveNext(e, actions.setNextFrame)}>Next</Button>}
      </div>
    )
  }

  moveNext = (e, setNextFrame) => {
    e.stopPropagation() // !
    setNextFrame()
  }

  handleSubmit = e => {
    this.setState({ submitted: true })
  }

  render () {
    const { submitted } = this.state

    return (
      <div className='multistep-form'>
        <MagicHeat
          renderFrame={this.renderFrame}
          onStartAnimation={this.onStartAnimation}
          onEndAnimation={this.onEndAnimation}
          singleFrame={submitted}
        />
      </div>
    )
  }

  onStartAnimation = () => this.setState({ animating: true })
  onEndAnimation = () => this.setState({ animating: false })
}

export default MultiStepForm
