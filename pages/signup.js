import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import '~/styles/global'
import Modal from '../components/modal'
import Input from '../components/input'
import Button from '../components/button'
import { Link } from '../routes'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
export default class Signup extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <Input placeholder="Username" type="username" />
            <br />
            <br />
            <Input placeholder="Email" type="email" />
            <br />
            <br />
            <Input placeholder="Password" type="password" />
            <br />
            <br />
            <Button name="Signup" onClick={() => alert('signup')} />
            <Link route="/login">
              <Button name="Or Login" />
            </Link>
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}
