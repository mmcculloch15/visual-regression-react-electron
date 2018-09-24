import React, { Component } from 'react'
import styled from 'styled-components'
//import ImageSection from './ImageSection'

const StyledView = styled.div`
  flex: 80%;
  background-color: rgba(133, 169, 226, 0.3);
  height: 100vh;
`

// export default class MainView extends Component {
//   render() {
//     const { baseline, latest, diff } = this.props.activeTest
//     return (
//     <StyledView>
//     {(this.props.activeTest.baseline != '') ?
//         <ImageSection title="Baseline" src={baseline} />
//         <ImageSection title="Latest" src={latest} />
//         <ImageSection title="Diff" src={diff} />
//     : <p>No active test</p>
//     }}
//     </StyledView>

//     )

//   }
// }

const MainView = props => {
  if (props.activeTest.baseline != '') {
    const { baseline, latest, diff } = props.activeTest
    console.log(baseline)
    return (
      <StyledView>
        <p>Baseline</p>
        <img src={'../' + baseline} />
        <p>Latest</p>
        <img src={'../' + latest} />
        <p>Diff</p>
        <img src={'../' + diff} />
      </StyledView>
    )
  } else {
    return <StyledView>Not active</StyledView>
  }
}

export default MainView
