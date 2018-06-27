import React, { Component, Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'

class Step3 extends Component {
  render () {
    return (
      <Fragment>
        <FormGroup>
          <Label for='about'>Bio</Label>
          <Input
            id='about'
            type='textarea'
            placeholder='Tell us about yourself...'
          />
        </FormGroup>
      </Fragment>
    )
  }
}

export default Step3
