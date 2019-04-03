import React, { Component } from 'react';

import { AppContainer } from './helpers/theme';

import PasswordResetFrom from './components/PasswordResetForm';
import RegisterForm from './components/RegisterForm';




class App extends Component {
  render() {
    return (
      <AppContainer>
        <PasswordResetFrom />
        <RegisterForm />
      </AppContainer>
    );
  }
}

export default App;
