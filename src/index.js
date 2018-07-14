import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Result from './Result'
import Election from './Election'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/willwehaveAchance2election" component={Election} />
      <Route path="/e/:search" component={Result} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
