import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Router from 'next/router'
import '~/styles/global'
import Modal from '../components/modal'
import Input from '../components/input'
import Button from '../components/button'
import { Link } from '../routes'
import ReduxWrapper from '../components/ReduxWrapper'
import { addUsername, addUserEmail, addUserPassword, signup } from '../actions/userActions'
import isLoggedIn from '../actions/IsLoggedIn'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
class Signup extends Component {
  async componentDidMount() {
    await isLoggedIn(this.props.dispatch).then(loggedIn => {
      if (loggedIn) {
        Router.push('/')
      }
    })
  }

  async signupUser() {
    await this.props.dispatch(signup())
    Router.push('/')
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <span>{this.props.user.error}</span>
            {this.props.user.loading ? <span>Loading...</span> : null}
            <Input placeholder="Username" type="username" onChange={event => this.props.dispatch(addUsername(event.target.value))} value={this.props.user.username} />
            <Input placeholder="Email" type="email" onChange={event => this.props.dispatch(addUserEmail(event.target.value))} value={this.props.user.email} />
            <Input placeholder="Password" type="password" onChange={event => this.props.dispatch(addUserPassword(event.target.value))} value={this.props.user.password} />
            <Button name="Signup" onClick={() => this.signupUser()} />
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
