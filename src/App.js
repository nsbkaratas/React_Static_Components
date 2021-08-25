import './App.css';
import React from "react"
import Sidebar from './Sidebar';
import Statistics from './Statistics';
import WebVisiter from './WebVisiter';

class App extends React.Component{
  render(){
    return(
      <div id="container">
        <Sidebar/>
        <Statistics/>
        <WebVisiter/>        
      </div>
    )
  }
}



export default App;
