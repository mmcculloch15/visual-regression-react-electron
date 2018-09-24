import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaths: this.props.imagePaths,
      activeTest: {
        baseline: '',
        latest: '',
        diff: '',
      },
    }
    this.setActiveTest = this.setActiveTest.bind(this)
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

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideBar imagePaths={this.props.imagePaths} setActiveTest={this.setActiveTest} />
        <MainView activeTest={this.state.activeTest} />
      </div>
    )
  }
}
