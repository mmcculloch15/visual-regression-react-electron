import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { getImagePaths } from './fs'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaths: getImagePaths(),
      activeTest: {},
    }
    this.setActiveTest = this.setActiveTest.bind(this)
    this.resolveActiveTest = this.resolveActiveTest.bind(this)
  }

  setActiveTest(baseline, latest, diff) {
    this.setState({
      activeTest: {
        baseline,
        latest,
        diff,
      },
    })
  }

  resolveActiveTest() {
    const imagePaths = getImagePaths()
    this.setState({
      imagePaths: imagePaths,
      activeTest: {},
    })
  }

  render() {
    if (Array.from(Object.keys(this.state.imagePaths.diff)).length != 0) {
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Grid container justify="space-between" alignItems="center">
                <Grid item xs={8}>
                  <Typography variant="title" color="inherit">
                    Visual Regression Diff
                  </Typography>
                </Grid>
                <Grid>
                  <Button variant="contained" color="primary">
                    <Icon>
                      <i className="material-icons">thumb_up</i>
                    </Icon>
                    Approve All
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <Grid container>
            <Grid item xs={2}>
              <SideBar imagePaths={this.state.imagePaths} setActiveTest={this.setActiveTest} />
            </Grid>

            <Grid item xs>
              <MainView
                deleteFile={this.props.deleteFile}
                activeTest={this.state.activeTest}
                clearActiveTest={this.clearActiveTest}
              />
            </Grid>
          </Grid>
        </div>
      )
    } else {
      return <div style={{ fontSize: 50 }}>No tests to diff! 🎉</div>
    }
  }
}
