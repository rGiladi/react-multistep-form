import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

class Step1 extends Component {
  render () {
    return (
      <Fragment>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='email' id='email' />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='password' id='password' />
        </FormGroup>
        <FormGroup>
          <Label for='c-password'>Confirm Password</Label>
          <Input type='password' id='c-password' />
        </FormGroup>
      </Fragment>
    )
  }
}

export default Step1
