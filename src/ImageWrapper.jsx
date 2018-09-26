import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Typography } from "@material-ui/core"
import styled from "styled-components"

const ImageWrap = styled.div`
  border-color: coral;
`

const Img = styled.img`
  max-width: 95%;
  max-heigh: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border: 1px solid lightgray;
`

const ImageWrapper = props => {
  const { title, src } = props
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>
        </CardContent>
        <ImageWrap>
          <Img src={"../" + src} />
        </ImageWrap>
      </Card>
    </div>
  )
}

export default ImageWrapper
