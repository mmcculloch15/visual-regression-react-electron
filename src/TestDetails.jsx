import React, { Component } from 'react'
import { extractTestDataFromPath } from './helpers'
import styled from 'styled-components'

const Test = styled.div`
  border-bottom: 2px solid black;
  z-index: 1;
`
export default class TestDetails extends Component {
  render() {
    const { component, breakpoint, browser, title, baseline, latest, diff } = this.props
    return (
      <Test onClick={() => this.props.setActiveTest(baseline, latest, diff)}>
        <p>Component: {component}</p>
        <p>Test: {title}</p>
        <p>
          Browser: {browser} -- {breakpoint}
        </p>
      </Test>
    )
  }
}
