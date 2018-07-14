import React, { Component } from 'react'
import ReactTimeout from 'react-timeout'
import styled from 'styled-components'

class Election extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      hidden: true,
      show: false,
      autoPlay: "autoplay",
    })
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({
        hidden: !this.state.hidden,
      });
    }.bind(this), 6000)
  }

  render() {
    return(
      <div style={this.state.hidden ? {display: 'none'} : {display: 'block'}}>

      </div>
    )
  }
}

export default Election
