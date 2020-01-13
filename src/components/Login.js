import React, { Component } from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (

            <div className="login">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button class="btn btn-primary" type="submit">Sign In</button>
              
                <p className="forgot-password text-center">
                Don't Have Acoount <Link to ='/Register'>Click here !!!</Link><br/>

                    Forgot <a href="#">password?</a>

                </p>
            </form>
            </div>
        );
    }
}