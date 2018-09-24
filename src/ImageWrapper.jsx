import React, { Component } from 'react'
import styled from 'styled-components'

const StyledImageWrapper = styled.div`
  img {
    max-width: 80%;
    padding: 2%;
  }
`

const ImageWrapper = props => {
  const { title, src } = props
  return (
    <StyledImageWrapper>
      <p>{title}</p>
      <img src={'../' + src} />
    </StyledImageWrapper>
  )
}

export default ImageWrapper

{
  /* export default class ImageWrapper extends Component {
  render() {
    return (
      <StyledImageWrapper>
        <p>{title}</p>
        <img src={'../' + src} />
      </StyledImageWrapper>
    )
  }
} */
}
