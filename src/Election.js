import React, { Component } from 'react'
import ReactTimeout from 'react-timeout'
import styled from 'styled-components'

const Main = styled.div`
  background: url(/picture/Grey-Democracy-b.jpg) no-repeat center center fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Loader = styled.div`
  align-self: center;
`

const Image = styled.img`
  height: calc(100vh - 70vh);
  display: block;
  margin: 0 auto;
`

const Text = styled.p`
  display: block;
  color: #aaa74e;
`

class Election extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      hidden: false,
      show: true,
    })
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({
        show: !this.state.show,
        hidden: !this.state.hidden,
      });
    }.bind(this), 6000)
  }

  render() {
    return(
      <Main>
        <audio loop autoPlay>
          <source src="/giveHappyBack.mp3" />
        </audio>
        <Loader style={this.state.hidden ? {display: 'none'} : {display: 'block'}}>
          <Text>กำลังส่งข้อมูลให้ Tenserflow คำนวณความเป็นไปได้</Text>
          <Image src="/Double-Ring.gif" />
        </Loader>
      </Main>
    )
  }
}

export default Election
