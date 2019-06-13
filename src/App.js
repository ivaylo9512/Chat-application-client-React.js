import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Chat from './components/Chat';

class App extends Component {
    constructor () {
        super()
        this.user = null
        this.chat = null
        this.setUser = this.setUser.bind(this)
    }
    setUser(user){
        this.user = user
    }
    setCurrentChat(chat){
        console.log(chat)
    }
    render() {
        return (
            <div className="App">
                <Header setCurrentChat={this.setCurrentChat} />
                <Login setUser={this.setUser} />
            </div>
        )
    }
}
export default App;
