import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-self: center;
  background-color: lightgrey;
  display: inline;
  padding: 10px;
  text-align: center;
  width: 50%;
`

const Modal = props => {
  return <Container>{props.children}</Container>
}

export default Modal
