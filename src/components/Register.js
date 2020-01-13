import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import Axios from 'axios'
export default class Register extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       lastName:'',
       username:'',
       password:''
    }
  }
  
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    Axios.post('http://localhost:3001/users/signup',this.state)
    .then((response) =>{
      console.log(response)
    }).catch((err)=>{ console.log(err)})
  }


  render() {
    return (
      <div>
      <div className="myForm">
        <div className="form-row">
            
        <div className="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" 
      value={this.state.firstName} onChange={this.handleChange}
      />
    </div>

    <div className="form-group col-md-6">
      <label for="inputEmail4">Last Name</label>
      <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" 
      value={this.state.lastName} onChange={this.handleChange}
      />
    </div>

    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" name="username" id="username" placeholder="Email"
      value={this.state.username} onChange={this.handleChange}
       />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" name="password" id="password" placeholder="Password" 
      value={this.state.password} onChange={this.handleChange}
      />
    </div>
  </div>
  {/* <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Dillibazar, Kathmandu" />
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Phone Number</label>
      <input type="number" className="form-control" id="inputCity" min = "0" placeholder="9865321456"  />
    </div>
    <div className="form-group col-md-6">
      <label for="inputState">Choose gender</label>
      <select id="inputState" className="form-control">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Date Of Birth</label>
      <input type="Date" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
       Accept the Terms and Conditions
      </label>
    </div>
  </div> */}
  <button class="btn btn-primary" type="submit" onClick={this.handleSubmit}>Sign Up</button>
  <br/>
  Already Have Acoount <Link to ='/Login'>Click here !!!</Link><br/>
        </div>
      </div>
    )
  }
}

