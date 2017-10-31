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
    let stars = ''
    for (let i = event.target.value.length; i > 0; i--){
        stars += '*'
    }
    this.setState({ username: event.target.value, usernameInput: stars })
}
updatePassword(event){
    this.setState({ password: event.target.value})
    console.log(`event: ${event.target.value}`)
    let stars = ''
    for (let i = event.target.value.length; i > 0; i --){stars += '*' }
    this.setState({ passwordInput: stars})
    console.log(`pwInput: ${this.state.passwordInput}`)
    
}

enterData(){
    alert(`Your username is: ${this.state.username}\nYour password is: ${this.state.password}`)
    this.setState({ username: '', password: '', usernameInput: '', passwordInput: ''})
}
render(){
    return(
        <div className="Login">
            
            <h2>Enter username and password</h2>
            <input placeholder="username" className="inputBox" value={this.state.usernameInput} onChange={this.updateUsername}/>
            <input placeholder="password" className="inputBox" value={this.state.passwordInput} onChange={this.updatePassword}/> 
            <button className='confirmButton' onClick={this.enterData}>Enter</button>

        </div>
    );
}

}