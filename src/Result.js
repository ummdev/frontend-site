import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(/picture/not-found.jpg) no-repeat center center fixed;
`

const Content = styled.div`
  text-align: center;
  font-size: 4em;
  font-family: Matichon;
  color: red;
  text-shadow:
   -1px -1px 0 #FFF,
    1px -1px 0 #FFF,
    -1px 1px 0 #FFF,
     1px 1px 0 #FFF;
`

const Header = styled.h2`
  margin: 0;
`

const Text = styled.p`
  margin: 0;
`

const Back = styled(Link)`
  color: #555;
  margin-top: 20px;
  padding: 7px;
  border-radius: 4px;
  background: #FFF;
  &::visited {
    color: #555;
  }
`

const Result = ({match}) => (
  <Main>
    <Content>
      <Header>RESULT OF : {match.params.search}</Header>
      <Text>แม่งเอ้ย! หาไม่เจอว่ะ</Text>
    </Content>
    <Back to="/">กลับสู่หน้าหลัก</Back>
  </Main>
)

export default Result
