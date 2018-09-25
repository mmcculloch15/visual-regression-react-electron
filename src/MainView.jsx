import React, { Component } from 'react'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'
import Button from '@material-ui/core/Button'
import { deleteFile, acceptNewBaseline } from './fs'
import Grid from '@material-ui/core/Grid';


const StyledView = styled.div`
  background-color: rgba(133, 169, 226, 0.1);
  padding:20px;
`;

const Buttons = styled.div`
    margin-bottom:20px;
`;

export default class MainView extends Component {
  constructor(props) {
    super(props)
    this.rejectScreenshot = this.rejectScreenshot.bind(this)
  }

  rejectScreenshot() {
    deleteFile(this.props.activeTest.latest)
    deleteFile(this.props.activeTest.diff)
    this.props.clearActiveTest()
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => acceptNewBaseline(baseline, latest, diff)}
            >
              Accept
          </Button>
          </Buttons>

          <Grid container spacing={20}>
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
      return <StyledView>Not active</StyledView>
    }
  }
}
