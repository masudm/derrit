import React, { Component } from 'react'
import About from 'components/about'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import '~/styles/global'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
export default class Index extends Component {
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
