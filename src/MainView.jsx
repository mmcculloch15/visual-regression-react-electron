import React, { Component } from 'react'
import styled from 'styled-components'

const StyledView = styled.div`
  flex: 80%;
  background-color: rgba(133, 169, 226, 0.3);
  height: 100vh;
`

export default class MainView extends Component {
  render() {
    return <StyledView> Main View! </StyledView>
  }
}
