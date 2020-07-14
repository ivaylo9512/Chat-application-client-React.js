import React, { useState } from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import './App.css';
import Login from './components/Login'
import Logged from './components/Logged'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    const [user, setUser] = useState(undefined)
    const [auth, setAuth, removeAuth] = useLocalStorage('Authorization', null);

    const logout = () => {
        setUser(null)
        removeAuth()
    }

    return (
        <div className="root">
            <Router>
                {auth ? 
                    <>
                        <Logged logout={logout} user={user} /> 
                        <Redirect from="login" to="/" />
                    </>:
                    <Route path="/login" render={() => 
                        <Login setUser={setUser} setAuth={setAuth} />} />                               
                }
            </Router>
        </div>
    )
}

export default App;
