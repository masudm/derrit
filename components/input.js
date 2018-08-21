import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 2px;
  border: 2px solid black;
  display: block;
  align-self: center;
  margin: auto;
  margin-bottom: 10px;
`

const Input = props => {
  return <StyledInput {...props} />
}

export default Input
