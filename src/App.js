import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './components/Button';


const Container = styled.div`
background: red;
height: 100px;
width: 200px;
`




class App extends Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

export default App;
