import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 5px;
  border: 2px solid black;
  display: inline;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`

export default class Button extends Component {
  render() {
    return <StyledButton onClick={this.props.onClick}>{this.props.name}</StyledButton>
  }
}
