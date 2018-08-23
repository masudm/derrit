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

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
  align-items: center;
`
class Login extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <span>{this.props.user.error}</span>
            <Input placeholder="Email" type="email" onChange={event => this.props.dispatch(userActions.addUserEmail(event.target.value))} value={this.props.user.email} />
            <Input
              placeholder="Password"
              type="password"
              onChange={event => this.props.dispatch(userActions.addUserPassword(event.target.value))}
              value={this.props.user.password}
            />
            <Button name="Login" onClick={() => this.props.dispatch(userActions.login())} />
            <Link route="/signup">
              <Button name="Or Signup" />
            </Link>
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state)(Login))
