import React, { Component } from 'react'
import TestDetails from './TestDetails'
import SideBar from './SideBar'
import MainView from './MainView'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaths: this.props.imagePaths,
      activeTest: {},
    }
    this.setActiveTest = this.setActiveTest.bind(this)
    this.clearActiveTest = this.clearActiveTest.bind(this)
  }

  setActiveTest(baseline, latest, diff) {
    console.log('hi!')
    this.setState({
      activeTest: {
        baseline,
        latest,
        diff,
      },
    })
  }

  clearActiveTest() {
    this.setState({
      activeTest: {},
    })
  }

  render() {
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
                  <Icon><i className="material-icons">thumb_up</i></Icon>
                  Approve All
            </Button>
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>

        <Grid container>
          <Grid item xs={2}>
            <SideBar imagePaths={this.props.imagePaths} setActiveTest={this.setActiveTest} />
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
  }
}
