import React, { Component } from 'react'

export default class ImageSection extends Component {
  const { title, src } = this.props
  render() {
    return (
      <React.Fragment>
      <p>{title}</p>
      <img src={'../'+src} />
      </React.Fragment>
    )
  }
}
