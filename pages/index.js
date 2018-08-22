import React, { Component } from 'react'
import About from 'components/about'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import '~/styles/global'
import { connect } from 'react-redux'
import ReduxWrapper from '../components/ReduxWrapper'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
class Index extends Component {
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

export default ReduxWrapper(connect(state => state)(Index))
