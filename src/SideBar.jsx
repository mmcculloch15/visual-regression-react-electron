import React, { Component } from 'react'
import styled from 'styled-components'
import TestDetails from './TestDetails'

const StyledSideBar = styled.div`
  flex: 20%;
  border-right: 2px solid black;
  height: 100vh;
`

export default class SideBar extends Component {
  render() {
    return (
      <StyledSideBar>
        I'm here!
        <TestDetails />
      </StyledSideBar>
    )
  }
}
