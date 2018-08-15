import React, { Component } from 'react'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '~/styles/global'
import { Link } from '../routes'
import Modal from '../components/modal'
import Input from '../components/input'
import Button from '../components/button'
import Wrapper from '../components/wrapper'
import * as userActions from '../actions/userActions'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
  align-items: center;
`
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value })
  }

  login() {
    const email = this.state.email
    // const password = this.state.password

    this.props.userActions.addUserEmail(email)

    console.log(this.props)
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Modal>
            <Input placeholder="Email" type="email" onChange={evt => this.handleChange(evt, 'email')} value={this.state.email} />
            <br />
            <br />
            <Input placeholder="Password" type="password" onChange={evt => this.handleChange(evt, 'password')} value={this.state.password} />
            <br />
            <br />
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

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default Wrapper(connect(mapStateToProps, mapDispatchToProps)(Login))
