import React, { Component } from 'react'
import axios from 'axios' 
export default class TodoForm extends Component {
constructor(props) {
    super(props)

    this.state = {
        UserId:1,
         title: '',
         completed: false
    }
}
handleTitleChange = (event) => {
    this.setState({
        title: event.target.value
      
    })


}
submitTitle = (event) => {
    event.preventDefault();
   // alert(this.State.title);
   axios.post('https://jsonplaceholder.typicode.com/todos',this.state)
   .then((response) =>{
       console.log(response);
       this.setState({
           title : ''
       })
   }).catch((err) => console.log(err))

}

    render() {
        return (
            <div>
                <h2>Todo Form</h2>
                <form>
                    <label>Title</label>   
                    <input type="text" value = {this.setState.title} placeholder="Enter Title......" onChange={this.handleTitleChange} />
                    <br />
              
                    <button type ="submit" onClick={this.submitTitle}>Submit</button>


                </form>
            </div>
        )
    }
}
