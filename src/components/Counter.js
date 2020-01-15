import React, { Component } from 'react'
import TodoForm from './TodoForm';

export default class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
         count: 0
    }
}
handleClick = () => {
    this.setState({count: this.state.count + 1});
}




    render() {
        return (
            <div>
               <h2>You have clicked {this.state.count} Times</h2>
               <button onClick={this.handleClick}>click me!!</button> 
 
               <TodoForm/>
            </div>
        )
    }
}

