import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 2px;
  border: 2px solid black;
  display: block;
  align-self: center;
  margin: auto;
  margin-bottom: 10px;
`

export default class Input extends Component {
  render() {
    return <StyledInput {...this.props} />
  }
}
