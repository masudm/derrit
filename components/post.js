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

const Post = props => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>
        <i>{props.timestamp}</i>
      </p>
    </Container>
  )
}

export default Post
