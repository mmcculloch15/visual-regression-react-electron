import React, { Component } from "react";
import TestDetails from "./TestDetails";
import SideBar from "./SideBar";
import MainView from "./MainView";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import Typography from "@material-ui/core/Typography";
import { getImagePaths } from "./fs";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePaths: getImagePaths(),
      activeTest: {}
    };
    this.setActiveTest = this.setActiveTest.bind(this);
    this.resolveActiveTest = this.resolveActiveTest.bind(this);
  }

  setActiveTest(baseline, latest, diff) {
    this.setState({
      activeTest: {
        baseline,
        latest,
        diff
      }
    });
  }

  resolveActiveTest() {
    const imagePaths = getImagePaths();
    this.setState({
      imagePaths: imagePaths,
      activeTest: {}
    });
  }

  render() {
    if (Array.from(Object.keys(this.state.imagePaths.diff)).length != 0) {
      return (
        <React.Fragment>
          <Header />
          <Grid container position="fixed">
            <Grid item xs={2} style={{ borderRight: "1px solid #E0E0E0" }}>
              <SideBar
                imagePaths={this.state.imagePaths}
                setActiveTest={this.setActiveTest}
              />
            </Grid>

            <Grid item xs className="pattern-background">
              <MainView
                deleteFile={this.props.deleteFile}
                activeTest={this.state.activeTest}
                resolveActiveTest={this.resolveActiveTest}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <div
            style={{
              left: "50%",
              top: "50%",
              height: "inherit",
              paddingTop: "20vh"
            }}
            className="pattern-background"
          >
            <Typography variant="display4" align="center">
              No tests to diff! 🎉
            </Typography>
          </div>
        </React.Fragment>
      );
    }
  }
}
