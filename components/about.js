import React, { Component } from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import { H1 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 90px;
  }

  padding-top: 30px;
  padding-bottom: 25px;
`
const Header = H1.extend`
  text-align: center;
  font-weight: 500;
`

const Logo = styled.img`
  width: 300px;
  margin: 0 0 28px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }
`

const Kitten = styled.img`
  width: 300px;
  margin: 20px 0 28px;
  border-radius: 50%;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }
`

export default class About extends Component {
  render() {
    return (
      <Container>
        <Logo src="/static/logo.svg" alt="ZDev logo" />
        <Kitten src="/static/animals/kitten.jpg" alt="Cute Kitten" />
        <Header>Hello World!</Header>
      </Container>
    )
  }
}
