import React, { Component } from 'react';
import 'antd/dist/antd.css';


import ArticleList from './screen/ArticleListView';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          <div>
              <ArticleList />
          </div>

      </div>
    );
  }
  
}

export default App;
