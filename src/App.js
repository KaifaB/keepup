import React from 'react'
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';



function Login() {
  const [tab, setTab] = useState(1);

  return (
    <div className="login-container">
      <div className="contain-both">
        <div className="choices">
          <div className={(tab === 1) ? 'choice active' : 'choice'} onClick={() => setTab(1)} for="login"><h1>Login</h1></div>
          <div className={(tab === 2) ? 'choice active' : 'choice'} onClick={() => setTab(2)} for="signup"><h1>Sign Up</h1></div>
        </div>
        <div className={(tab === 1) ? 'login show' : 'login'}>
          <span className='flex line'><h2>Username:</h2><input type="text"></input></span>
          <span className='flex line'><h2>Password:</h2><input type="text"></input></span>
          <span className='flex line'>
          <button>Log In</button>
          <button>Log In as Guest</button>
          </span>
        </div>
        <div className={(tab === 2) ? 'signup show' : 'signup'}>
          <span className='flex line'><h2>Username:</h2><input type="text"></input></span>
          <span className='flex line'><h2>Email:</h2><input type="text"></input></span>
          <span className='flex line'><h2>Password:</h2><input type="text"></input></span>
          <span className='flex line'><h2>Confirm Password:</h2><input type="text"></input></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
