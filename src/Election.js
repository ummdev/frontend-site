import React, { Component } from 'react'
import ReactTimeout from 'react-timeout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'

const Main = styled.div`
  background: url(/picture/Grey-Democracy.jpg) no-repeat center center fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Loader = styled.div`
  align-self: center;
`

const None = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Back = styled(Link)`
  text-align: center;
  color: #555;
  margin-top: 20px;
  padding: 7px;
  border-radius: 4px;
  background: #FFF;
  &::visited {
    color: #555;
  }
`

class Election extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      hidden: false,
      show: false,
      final: false,
      data: {
        labels: ["ประยุทธ์", "ทักษิณ", "อภิสิทธ์", "ยิ่งลักษณ์", "ชวน"],
        datasets: [{
        label: "นายกที่คนส่วนใหญ่โปรดปราน",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [63.5, 11.3, 10.7, 5.5, 4.3],
        }]
      },
      option: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'white'
            },
            scales: {
            xAxes: [
              {
                ticks: {
                   fontSize: 18,
                   fontColor: 'black',
                },
              }
            ],
            yAxes: [
              {
                  ticks: {
                     fontSize: 18,
                     fontColor: 'black',
                  },
                   display: true,
}
            ]
        }
        }
      }
    })
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({
        hidden: !this.state.hidden,
        show: !this.state.show,
      });
    }.bind(this), 5000)
    setTimeout(function () {
      this.setState({
        show: !this.state.show,
        final: !this.state.final,
      })
    }.bind(this), 10000)
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
        <None style={this.state.hidden ? {display: 'flex'} : {display: 'none'}}>
          <Bar data={this.state.data} width={500} height={1000} options={this.state.option}/>
          <p style={this.state.show ? {
              textAlign: 'center',
              color: 'black',
            } : {display: 'none'}}>กำลังประมวลผล.. ไม่นานกว่า BTS ซ่อมเสร็จแน่นอน</p>
          <h1 style={this.state.final ? {
              textAlign: 'center',
              color: 'red',
            } : {display: 'none'}}>อ้าว! คุณไม่รู้หรอ? วัน...ไงล่ะ</h1>
          <Back to="/">ทำใจและกลับหน้าหลัก</Back>
        </None>
      </Main>
    )
  }
}

export default Election
