import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diffPaths: this.props.diffPaths,
    }
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideBar diffImages={this.props.diffPaths} />
        <MainView />
      </div>
    )
  }
}
