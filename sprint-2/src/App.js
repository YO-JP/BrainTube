import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './component/Header/Header.js';
import Main from './page/Main.js';
import Upload from './page/Upload.js';



import './App.css';



class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
      
        <Header />
      <Switch>
        
        <Route exact path="/" component={Main} />
        <Route path="/upload" component={Upload}/>
        <Route path="/video/:id" component={Main}/>
        
      
      </Switch>
      
      </BrowserRouter>
      </>
    )
  }
}



export default App;
