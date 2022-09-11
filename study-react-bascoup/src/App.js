import React, { Component } from 'react';
import './App.css';

import MainPageTemplate from './components/mainpage/MainPageTemplate';
import MainPageHeader from './components/mainpage/MainPageHeader';
import MainpageAlarm from './components/mainpage/MainPageAlarm';
import MainPagePhoto from './components/mainpage/MainPagePhoto';

class App extends Component {
  render() {
    return (
      <div>
        <MainPageTemplate />
          <MainPageHeader />
          <MainPagePhoto />
          <MainpageAlarm />
      </div>
    );
  }
}

export default App;