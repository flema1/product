import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//const googleTrends = require('google-trends-api');

import googleTrends from 'google-trends-api'; 




function bob (x){
  googleTrends.interestOverTime({keyword: ['Women\'s march', 'Trump Inauguration']})
.then(function(results){
  x=results;  
  console.log('These results are awesome', results);
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});
}

function Stats() {
  let x=null; 
  bob(x);
console.log ("bob"); 
  return (
    <h1>{x}</h1>
  )
}


class App extends Component {









  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Stats/>
      </div>
    );
  }
}

export default App;
