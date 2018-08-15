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
import * as inputActions from '../actions/inputActions'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
class Signup extends Component {
  handleChange(event, key) {
    this.props.addInput(key, event.target.value)
  }

  signup() {
    console.log(this.props.input)
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <Input placeholder="Username" type="username" onChange={evt => this.handleChange(evt, 'username')} value={this.props.input.username} />
            <Input placeholder="Email" type="email" onChange={evt => this.handleChange(evt, 'email')} value={this.props.input.email} />
            <Input placeholder="Password" type="password" onChange={evt => this.handleChange(evt, 'password')} value={this.props.input.password} />
            <Button name="Signup" onClick={() => this.signup()} />
            <Link route="/login">
              <Button name="Or Login" />
            </Link>
          </Modal>
        </PageContainer>
      </Page>
    )
  }
}

export default ReduxWrapper(connect(state => state, { ...userActions, ...inputActions })(Signup))
