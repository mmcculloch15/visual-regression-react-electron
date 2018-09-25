import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaths: this.props.imagePaths,
      activeTest: {},
    }
    this.setActiveTest = this.setActiveTest.bind(this)
    this.clearActiveTest = this.clearActiveTest.bind(this)
  }

  setActiveTest(baseline, latest, diff) {
    console.log('hi!')
    this.setState({
      activeTest: {
        baseline,
        latest,
        diff,
      },
    })
  }

  clearActiveTest() {
    this.setState({
      activeTest: {},
    })
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideBar imagePaths={this.props.imagePaths} setActiveTest={this.setActiveTest} />
        <MainView
          deleteFile={this.props.deleteFile}
          activeTest={this.state.activeTest}
          clearActiveTest={this.clearActiveTest}
        />
      </div>
    )
  }
}
