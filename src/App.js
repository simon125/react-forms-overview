import React, { Component } from 'react';

import { AppContainer } from './helpers/theme';

import PasswordResetFrom from './components/PasswordResetForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import SubscribeForm from './components/SubscribeForm';




class App extends Component {
  render() {
    return (
      <AppContainer>
        <PasswordResetFrom />
        <RegisterForm />
        <LoginForm />
        <SubscribeForm />
      </AppContainer>
    );
  }
}

export default App;
