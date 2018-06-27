import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

class Step2 extends Component {
  render () {
    return (
      <Fragment>
        <FormGroup>
          <Label for='name'>Full Name</Label>
          <Input type='text' id='name' />
        </FormGroup>
        <FormGroup>
          <Label for='country'>Country</Label>
          <Input type='text' id='country' />
        </FormGroup>
        <FormGroup>
          <Label for='age'>Age</Label>
          <Input type='number' id='age' />
        </FormGroup>
      </Fragment>
    )
  }
}

export default Step2
