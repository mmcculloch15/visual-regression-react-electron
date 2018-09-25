import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'
import { getImagePaths } from './fs'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaths: getImagePaths(),
      activeTest: {},
    }
    console.log(this.state)
    this.setActiveTest = this.setActiveTest.bind(this)
    this.resolveActiveTest = this.resolveActiveTest.bind(this)
  }

  setActiveTest(baseline, latest, diff) {
    this.setState({
      activeTest: {
        baseline,
        latest,
        diff,
      },
    })
  }

  resolveActiveTest() {
    const imagePaths = getImagePaths()
    this.setState({
      imagePaths: imagePaths,
      activeTest: {},
    })
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideBar imagePaths={this.state.imagePaths} setActiveTest={this.setActiveTest} />
        <MainView
          deleteFile={this.props.deleteFile}
          activeTest={this.state.activeTest}
          resolveActiveTest={this.resolveActiveTest}
        />
      </div>
    )
  }
}
