import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import '~/styles/global'
import { Link } from '../routes'
import Modal from '../components/modal'
import Input from '../components/input'
import Button from '../components/button'
import ReduxWrapper from '../components/ReduxWrapper'
import * as userActions from '../actions/userActions'
import * as inputActions from '../actions/inputActions'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
  align-items: center;
`
class Login extends Component {
  login() {
    const email = this.props.input.email

    this.props.addUserEmail(email)
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <Input placeholder="Email" type="email" onChange={evt => this.props.addInput('email', evt.target.value)} value={this.props.input.email} />
            <Input placeholder="Password" type="password" onChange={evt => this.props.addInput('password', evt.target.value)} value={this.props.input.password} />
            <Button name="Login" onClick={() => this.login()} />
            <Link route="/signup">
              <Button name="Or Signup" />
            </Link>
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state, { ...userActions, ...inputActions })(Login))
