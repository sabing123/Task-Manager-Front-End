import React, { Component } from 'react'
import axios from 'axios' 

export default class TodoList extends Component {
constructor(props) {
    super(props)

    this.state = {
         todos:[
] 
      
    }
}

componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>{
        console.log(response.data)
        this.setState({
            todos: response.data
        })

    }).catch((err) => console.log(err));
}


    render() {
        return (
            <div>
               todo list
               <ul>
                 {this.state.todos.map (item => <li key = {item.id}> {item.title} </li> )}
               </ul>

            </div>
        )
    }
}
