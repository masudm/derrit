import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import '~/styles/global'
import Modal from '../components/modal'
import ReduxWrapper from '../components/ReduxWrapper'
import { getPosts } from '../actions/postActions'
import Post from '../components/post'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
  align-items: center;
`
class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <span>{this.props.posts.error}</span>
            {this.props.posts.loading ? <span>Loading...</span> : null}
            {this.props.posts.posts != null
              ? this.props.posts.posts.map(val => {
                  return <Post {...val[1]} />
                })
              : null}
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state)(Posts))
