import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaths: this.props.imagePaths,
    }
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideBar imagePaths={this.props.imagePaths} />
        <MainView />
      </div>
    )
  }
}
