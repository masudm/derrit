import { Component } from 'react'
import Router from 'next/router'
import '~/styles/global'
import { connect } from 'react-redux'
import ReduxWrapper from '../components/ReduxWrapper'
import isLoggedIn from '../components/IsLoggedIn'

class Index extends Component {
  componentDidMount() {
    // redirect to posts
    if (isLoggedIn(this.props.dispatch)) {
      Router.push('/posts')
    } else {
      Router.push('/login')
    }
  }
  render() {
    return null
  }
}

export default ReduxWrapper(connect(state => state)(Index))
