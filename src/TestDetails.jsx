import React, { Component } from 'react'
import { extractTestDataFromPath } from './helpers'
import styled from 'styled-components'

const Test = styled.div`
  border-bottom: 2px solid black;
`
export default class TestDetails extends Component {
  render() {
    const { component, breakpoint, browser, title } = this.props
    return (
      <Test>
        <p>Component: {component}</p>
        <p>Test: {title}</p>
        <p>
          Browser: {browser} -- {breakpoint}
        </p>
      </Test>
    )
  }
}
