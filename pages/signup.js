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
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
    }
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value })
  }

  signup() {
    const email = this.state.email
    const username = this.state.username
    const password = this.state.password

    console.log(email, password, username, this.props)
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <Input placeholder="Username" type="username" onChange={evt => this.handleChange(evt, 'username')} value={this.state.username} />
            <Input placeholder="Email" type="email" onChange={evt => this.handleChange(evt, 'email')} value={this.state.email} />
            <Input placeholder="Password" type="password" onChange={evt => this.handleChange(evt, 'password')} value={this.state.password} />
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

export default ReduxWrapper(connect(state => state, userActions)(Signup))
