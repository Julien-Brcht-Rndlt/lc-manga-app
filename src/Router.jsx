import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'

export default function MyAppRouter() {

    return(
        <Router>
            {/* basic navbar
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div> 
            */}

            {/* using Semantic UI */}
            <NavBar/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}