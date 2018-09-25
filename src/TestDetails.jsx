import React, { Component } from 'react'
import { extractTestDataFromPath } from './helpers'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export default class TestDetails extends Component {
  render() {
    const { component, breakpoint, browser, title, baseline, latest, diff } = this.props
    return (
      <div>
        <ListItem
          button
          onClick={() => this.props.setActiveTest(baseline, latest, diff)}
          style={{ borderRight: '1px solid #E0E0E0' }}
        >
          <ListItemText>
            <p>Component: {component}</p>
            <p>Test: {title}</p>
            <p>
              Browser: {browser} -- {breakpoint}
            </p>
          </ListItemText>
        </ListItem>
        <Divider />
      </div>
    )
  }
}
