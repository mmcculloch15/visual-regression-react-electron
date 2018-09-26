import React, { Component } from 'react'
import TestDetails from './TestDetails'
import { extractTestDataFromPath, getScreenshotPaths } from './helpers'
import List from '@material-ui/core/List'

export default class SideBar extends Component {
  render() {
    const diffPaths = this.props.imagePaths.diff || false
    return (
      <List component="nav" style={{ marginTop: '-8px' }}>
        {diffPaths.map(path => {
          const testData = extractTestDataFromPath(path)
          const key = `${testData.browser}.${testData.breakpoint}.${testData.title}`
          return <TestDetails key={key} {...testData} {...this.props} />
        })}
      </List>
    )
  }
}
