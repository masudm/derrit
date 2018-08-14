import React, { Component } from 'react'
import About from 'components/about'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import '~/styles/global'
import Wrapper from '../components/wrapper'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`

class Index extends Component {
  componentDidMount() {
    console.log(this.props.posts)
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

export default Wrapper(connect(state => state)(Index))
