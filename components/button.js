import React from 'react'
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

const Button = props => {
  return <StyledButton {...props}>{props.name}</StyledButton>
}

export default Button
