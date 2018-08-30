import { Component } from 'react'
import Router from 'next/router'
import '~/styles/global'
import { connect } from 'react-redux'
import ReduxWrapper from '../components/ReduxWrapper'
import isLoggedIn from '../components/IsLoggedIn'

class Index extends Component {
  componentDidMount() {
    // redirect to posts
    if (this.props.user.loggedIn) {
      Router.push('/')
    }

    isLoggedIn(this.props.dispatch).then(loggedIn => {
      if (loggedIn) {
        Router.push('/posts')
      } else {
        Router.push('/login')
      }
    })
  }
  render() {
    return null
  }
}

export default ReduxWrapper(connect(state => state)(Index))
