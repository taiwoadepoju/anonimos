import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homePage';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

            <Route exact path ='/' component={Homepage} />
            <Route exact path = '/About' component={About} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
