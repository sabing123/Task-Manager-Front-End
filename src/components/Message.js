import React, { Component } from 'react'

export default class Message extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: '22C'
        }
    }
    
handleClick(){
    this.setState({message: 'Section 22D'});
}


    render() {
        return (
            <div>
            <h1>Hello, Class Component {this.props.name}</h1>
                <h1>Hello, Class Component {this.state.message}</h1>
                <button onClick={()=> this.handleClick()}>Click me!</button>
            </div>
        )
    }
}
