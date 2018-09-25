import React, { Component } from 'react'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'
import Button from '@material-ui/core/Button'
import { deleteFile, acceptNewBaseline } from './fs'

const StyledView = styled.div`
  flex: 85%;
  flex-direction: row;
  background-color: rgba(133, 169, 226, 0.3);
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
          <Button variant="contained" color="secondary" onClick={this.rejectScreenshot}>
            Reject
          </Button>
          <Button variant="contained" color="primary" onClick={this.acceptNewBaseline}>
            Accept
          </Button>
          <ImageWrapper title="Baseline" src={baseline} />
          <ImageWrapper title="Latest" src={latest} />
          <ImageWrapper title="Diff" src={diff} />
        </StyledView>
      )
    } else {
      return <StyledView>Not active</StyledView>
    }
  }
}
