// ITS BROKE 
// TODO 
// storing input value in e.target.value,,,, how to conceal users input, ut ****** ? 

import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            usernameInput: '',
            passwordInput: ''
        }
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.enterData = this.enterData.bind(this)
    }

updateUsername(event){
    this.setState({ username: event.target.value})
}
updatePassword(event){
    this.setState({ password: event.target.value})
}

enterData(){
    alert(`Your username is: ${this.state.username}\nYour password is: ${this.state.password}`)
    this.setState({ username: '', password: '', usernameInput: '', passwordInput: ''})
}
render(){
    return(
        <div className="Login">
            
            <h2>Enter username and password</h2>
            <input placeholder="username" className="inputBox" value={this.state.username} onChange={this.updateUsername}/>
            <input placeholder="password" type="password" className="inputBox" value={this.state.password} onChange={this.updatePassword}/> 
            <button className='confirmButton' onClick={this.enterData}>Enter</button>

        </div>
    );
}

}