import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import '~/styles/global'
import Modal from '../components/modal'
import ReduxWrapper from '../components/ReduxWrapper'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
  align-items: center;
`

class NewPost extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <span>{this.props.posts.error}</span>
            {this.props.posts.loading ? <span>Loading...</span> : null}
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state)(NewPost))
