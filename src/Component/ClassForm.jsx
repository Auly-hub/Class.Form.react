/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

class ClassForm extends Component {
constructor(props) {
    super(props)
    this.state = {
        name:"",
        email:"",
        password:"",
    }

    this.handleChange = (event) => {
        event.preventDefault();
        this.setState({
        [event.target.name]: event.target.value
        })
    }
    this.handleSubmit = (event)=> {
        event.preventDefault();
        console.log(this.state)
    }
}

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label>name</label>
            <input type="text" name='name' onChange={this.handleChange}></input>
            <br></br>
            <br></br>
            <label>email</label>
            <input type="email" name='email' onChange={this.handleChange}></input>
            <br></br>
            <br></br>
            <label>password</label>
            <input type="password" name='password' onChange={this.handleChange} />
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ClassForm
