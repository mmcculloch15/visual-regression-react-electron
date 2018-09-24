import React, { Component } from 'react'
import styled from 'styled-components'
import TestDetails from './TestDetails'
import { extractTestDataFromPath } from './helpers'

const StyledSideBar = styled.div`
  flex: 20%;
  border-right: 2px solid black;
  height: 100vh;
`

export default class SideBar extends Component {
  render() {
    const diffPaths = this.props.imagePaths.diff
    return (
      <StyledSideBar>
        I'm here!
        {diffPaths.map(path => {
          const testData = extractTestDataFromPath(path)
          const key = `${testData.component}.${testData.browser}.${testData.breakpoint}.${
            testData.title
          }`
          console.log(testData)
          return <TestDetails key={key} testData={testData} />
        })}
      </StyledSideBar>
    )
  }
}
