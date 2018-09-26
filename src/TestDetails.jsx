import React, { Component } from 'react'
import { extractTestDataFromPath } from './helpers'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export default class TestDetails extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(baseline, latest, diff) {
    this.props.setActiveTest(baseline, latest, diff)
  }

  render() {
    const { component, breakpoint, browser, title, baseline, latest, diff } = this.props
    return (
      <div>
        <ListItem dense={true} button onClick={() => this.handleClick(baseline, latest, diff)}>
          <ListItemText>
            <p>Component: {component}</p>
            <p>Test: {title}</p>
            <p>Browser: {browser} </p>
            <p>Breakpoint: {breakpoint} </p>
          </ListItemText>
        </ListItem>
        <Divider />
      </div>
    )
  }
}
