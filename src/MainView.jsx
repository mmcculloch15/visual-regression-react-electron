import React, { Component } from 'react'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'

const StyledView = styled.div`
  flex: 85%;
  flex-direction: row;
  background-color: rgba(133, 169, 226, 0.3);
`

const MainView = props => {
  if (props.activeTest.baseline != '') {
    const { baseline, latest, diff } = props.activeTest
    return (
      <StyledView>
        <ImageWrapper title="Baseline" src={baseline} />
        <ImageWrapper title="Latest" src={latest} />
        <ImageWrapper title="Diff" src={diff} />
      </StyledView>
    )
  } else {
    return <StyledView>Not active</StyledView>
  }
}

export default MainView
