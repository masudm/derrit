import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 2px;
  border: 2px solid black;
`

export default class Input extends Component {
  render() {
    return <StyledInput {...this.props} />
  }
}
