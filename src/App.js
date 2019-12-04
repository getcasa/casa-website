import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

// Routes
import Home from './Home'

export default function App() {
  return (
    <Router>
      <header>
        <div className='logo'><span>C</span>asa</div>
        <nav>
          {/* <Link to='/'>Home</Link> */}
          <a href='https://github.com/getcasa' target='_blank' rel='noopener noreferrer'>
            <div className='github-button'>
              <img src='/github.svg' alt='github' />
              <span>Github</span>
            </div>
          </a>
        </nav>
      </header>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}