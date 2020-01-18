import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './components/Navigation/MyAppBar'
import  './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar></MyAppBar>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;
