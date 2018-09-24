import React, { Component } from 'react'
import { extractTestDataFromPath } from './helpers'

//needs test details (component, test name, browser)

export default class TestDetails extends Component {
  render() {
    const { component, breakpoint, browser, title } = this.props.testData
    return (
      <React.Fragment>
        <p>Component: {component}</p>
        <p>Test: {title}</p>
        <p>
          Browser: {browser} -- {breakpoint}
        </p>
      </React.Fragment>
    )
  }
}
