import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import '~/styles/global'
import Modal from '../components/modal'
import Input from '../components/input'
import Button from '../components/button'
import { Link } from '../routes'
import ReduxWrapper from '../components/ReduxWrapper'
import * as userActions from '../actions/userActions'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
class Signup extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <span>{this.props.user.error}</span>
            <Input placeholder="Username" type="username" onChange={evt => this.props.dispatch(userActions.addUsername(evt.target.value))} value={this.props.user.username} />
            <Input placeholder="Email" type="email" onChange={evt => this.props.dispatch(userActions.addUserEmail(evt.target.value))} value={this.props.user.email} />
            <Input placeholder="Password" type="password" onChange={evt => this.props.dispatch(userActions.addUserPassword(evt.target.value))} value={this.props.user.password} />
            <Button name="Signup" onClick={() => this.props.dispatch(userActions.signup())} />
            <Link route="/login">
              <Button name="Or Login" />
            </Link>
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state)(Signup))
