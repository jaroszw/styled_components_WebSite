import React from 'react';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
      </Switch>
    </Router>
  );
}

export default App;