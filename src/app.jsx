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
    if (Array.from(Object.keys(this.state.imagePaths.diff)).length != 0) {
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
    } else {
      return <div style={{ fontSize: 50 }}>No tests to diff! 🎉</div>
    }
  }
}
