import { Component } from 'react'
import Router from 'next/router'
import '~/styles/global'
import { connect } from 'react-redux'
import ReduxWrapper from '../components/ReduxWrapper'

class Index extends Component {
  componentDidMount() {
    // redirect to posts
    Router.push('/posts')
  }
  render() {
    return null
  }
}

export default ReduxWrapper(connect(state => state)(Index))
