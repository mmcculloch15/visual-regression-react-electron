import React, { Component } from "react"
import styled from "styled-components"
import ImageWrapper from "./ImageWrapper"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { deleteFile, acceptNewBaseline } from "./fs"
import Grid from "@material-ui/core/Grid"

const StyledView = styled.div`
  padding: 50px;
  height: 300vh;
  position: fixed;
  top: 20px;
`

const Buttons = styled.div`
  margin-bottom: 20px;
  button {
    margin: 5px;
  }
`

export default class MainView extends Component {
  constructor(props) {
    super(props)
    this.rejectScreenshot = this.rejectScreenshot.bind(this)
    this.acceptNewBaseline = this.acceptNewBaseline.bind(this)
  }

  rejectScreenshot() {
    deleteFile(this.props.activeTest.latest)
    deleteFile(this.props.activeTest.diff)
    this.props.resolveActiveTest(this.props.activeTest.diff)
  }

  acceptNewBaseline() {
    fs.rename(this.props.activeTest.latest, this.props.activeTest.baseline, err => {
      if (err) throw err
    })
    deleteFile(this.props.activeTest.diff)
    this.props.resolveActiveTest(this.props.activeTest.diff)
  }

  render() {
    //if there is an active test, display the accept/reject form
    if (Object.keys(this.props.activeTest) != 0) {
      const { baseline, latest, diff } = this.props.activeTest
      return (
        <StyledView>
          <Buttons>
            <Button variant="contained" color="secondary" onClick={this.rejectScreenshot}>
              Reject
            </Button>
            <Button variant="contained" color="primary" onClick={this.acceptNewBaseline}>
              Accept
            </Button>
          </Buttons>

          <Grid container spacing={16}>
            <Grid item xs={4}>
              <ImageWrapper title="Baseline" src={baseline} />
            </Grid>
            <Grid item xs={4}>
              <ImageWrapper title="Latest" src={latest} />
            </Grid>
            <Grid item xs={4}>
              <ImageWrapper title="Diff" src={diff} />
            </Grid>
          </Grid>
        </StyledView>
      )
    } else {
      return (
        <StyledView>
          <Typography variant="display2" align="center">
            Select a test from the sidebar
          </Typography>
        </StyledView>
      )
    }
  }
}
