import React, { Component } from 'react'
import TestDetails from './TestDetails'
import { extractTestDataFromPath, getScreenshotPaths } from './helpers'
import List from '@material-ui/core/List'

const SideBar = props => {
  const diffPaths = props.imagePaths.diff
  return (
    <List component="nav">
      {diffPaths.map(path => {
        const testData = extractTestDataFromPath(path)
        const key = `${testData.browser}.${testData.breakpoint}.${testData.title}`
        return <TestDetails key={key} {...testData} {...props} />
      })}
    </List>
  )
}

export default SideBar
