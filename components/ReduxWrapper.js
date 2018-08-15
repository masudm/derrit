import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore.js'

const ReduxWrapper = WrapperProp => {
  return class WrapperClass extends React.Component {
    render() {
      return (
        <Provider store={configureStore()}>
          <WrapperProp />
        </Provider>
      )
    }
  }
}
export default ReduxWrapper
