import React, { Component } from 'react'
import About from 'components/about'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '~/styles/global'
import ReduxWrapper from '../components/ReduxWrapper'
import * as postActions from '../actions/postActions'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`

class Index extends Component {
  componentDidMount() {
    console.log(this.props.postActions.getPosts())
  }
  render() {
    return (
      <Page>
        <PageContainer>
          <About />
        </PageContainer>
      </Page>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch),
  }
}

export default ReduxWrapper(connect(mapStateToProps, mapDispatchToProps)(Index))
