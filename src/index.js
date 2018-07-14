import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './MainPage'

const Test = ({match}) => (
  <h3>{match.params.search}</h3>
)

const App = () => (
  <Router>
    <div>
      <Route exactly path="/" component={MainPage} />
      <Route path="/:search" component={Test}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
