import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import Router from 'next/router'
import { connect } from 'react-redux'
import '~/styles/global'
import Modal from '../components/modal'
import ReduxWrapper from '../components/ReduxWrapper'
import Input from '../components/input'
import { addNewTitle, addNewBody, createPost } from '../actions/postActions'
import Button from '../components/button'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
  align-items: center;
`

class NewPost extends Component {
  async addPost() {
    await this.props.dispatch(createPost())
    Router.push('/posts')
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <span>{this.props.posts.error}</span>
            {this.props.posts.loading ? <span>Loading...</span> : null}
            <Input placeholder="Title" type="text" onChange={event => this.props.dispatch(addNewTitle(event.target.value))} value={this.props.posts.title} />
            <Input placeholder="Body" type="text" onChange={event => this.props.dispatch(addNewBody(event.target.value))} value={this.props.posts.body} />
            <Button name="Add post" onClick={() => this.addPost()} />
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state)(NewPost))
