
import React from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import App from '../App'

export default function Routing() {
    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to= '/'>Home</Link>
                </li>
                <li>
                    <Link to= '/about'>About</Link>
                </li>
                <li>
                    <Link to= '/contact'>Contact</Link>
                </li>

                <li>
                    <Link to= '/Register'>Register</Link>
                </li>
                <li>
                    <Link to= '/Login'>Login</Link>
                </li>

            </ul>

            <Switch>

                <Route exact path ='/'> <App /> </Route>

                <Route path ='/about'><About /></Route>

                <Route path = '/contact'> <Contact /></Route>

                <Route path = '/Register'> <Register /></Route>

                <Route path = '/Login'> <Login /></Route>
            </Switch>

        </div>

        </Router>
        
    )
}
