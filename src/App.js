import React from "react";
import './styles/App.css';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paper from '@material-ui/core/Paper';


import ListPage from './view/list-page'
import NavMenu from './components/menu/NavMenu'


const App = () => {
  return (
    <Router>
      <NavMenu />
      <div className='root'>
      <Paper elevation={3} >
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
        </Switch>

        <Switch>
          <Route path="/123">123</Route>
        </Switch>
      </Paper>
      </div>
      <div id='footer'>
        <span>Подвал || Помойка</span>
      </div>
    </Router>
  );
}

export default App;
