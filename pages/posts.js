import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import _ from 'lodash'
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
            {_.map(this.props.posts.posts, (post, index) => {
              return <Post {...post} key={index} />
            })}
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state)(Posts))
