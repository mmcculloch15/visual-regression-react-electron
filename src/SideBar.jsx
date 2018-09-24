import React, { Component } from 'react'
import styled from 'styled-components'
import TestDetails from './TestDetails'
import { extractTestDataFromPath, getScreenshotPaths } from './helpers'

const StyledSideBar = styled.div`
  flex: 15%;
  border-right: 2px solid black;
  overflow: auto;
  display: block;
`

const SideBar = props => {
  const diffPaths = props.imagePaths.diff
  return (
    <StyledSideBar>
      {diffPaths.map(path => {
        const testData = extractTestDataFromPath(path)
        const key = `${testData.browser}.${testData.breakpoint}.${testData.title}`
        return <TestDetails key={key} {...testData} {...props} />
      })}
    </StyledSideBar>
  )
}

export default SideBar
