import React, { Component } from 'react';

import AppNavigator from './AppNavigator';
import NewProject from './components/newProject/index.js';
import SearchCollab from './components/searchCollab/index.js'

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
