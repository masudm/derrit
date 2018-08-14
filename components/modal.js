import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-self: center;
  background-color: lightgrey;
  display: inline;
  padding: 10px;
  text-align: center;
  width: 50%;
`

export default class Modal extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}
