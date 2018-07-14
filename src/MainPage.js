import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      link: '/',
      submit: false,
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleKeyPress = this._handleKeyPress.bind(this)
  }

  _handleChange(e) {
    this.setState({
      link: e.target.value,
    })
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState({
        submit: !this.state.submit,
      })
    }
  }

  render() {
    if (this.state.submit) {
      return(
        <Redirect to={this.state.link} />
      )
    }

    return(
      <Main>
        <img src="picture/logo.svg" width="400" />
        <SearchSection>
          <Input onChange={this._handleChange} onKeyPress={this._handleKeyPress}/>
          <SearchButton to={this.state.link}>
            <FontAwesome name="search" style={{color: '#999'}}/>
          </SearchButton>
        </SearchSection>
        <Protip>Protip: Let's try to type "XXX"</Protip>
      </Main>
    )
  }
}

const Main = styled.div`
  background: url(picture/background.jpg) no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const SearchSection = styled.div`
  margin-top: 30px;
`

const Input = styled.input`
  width: calc(100vw - 60vw);
  height: 31px;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: lightgray;
  border-radius: 4px 0 0 4px;
  font-size: 20px
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled(Link)`
  position: relative;
  margin-top: 1px;
  top: -2px;
  padding: 5px 7px 7.5px;
  border-width: 1px 1px 1px 0;
  border-color: lightgray;
  border-style: solid;
  border-radius: 0 4px 4px 0;
  background: #FFF;
  &:focus {
    outline: none;
  }
`

const Protip = styled.p`
  font-size: 0.7em;
`

export default MainPage
