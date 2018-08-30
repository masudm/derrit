import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-self: center;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  width: 95%;
  width: calc(100% - 20px);
  box-shadow: 10px 10px 20px -7px rgba(0, 0, 0, 0.35);
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5em;
`

const Body = styled.p`
  font-size: 1.2em;
`
const Time = styled.p`
  font-style: italic;
  color: lightgrey;
  font-size: 1em;
`

const Post = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Body>{props.body}</Body>
      <Time>{props.timestamp}</Time>
    </Container>
  )
}

export default Post
