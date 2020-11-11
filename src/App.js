import React from "react";
import './styles/App.css';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {createBrowserHistory} from 'history'

import ListPage from './view/list-page'
import PlanetPage from './view/planet-page'
import NavMenu from './components/menu/NavMenu'
import NotFound from './view/not-found-page';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <NavMenu />
      <div className='root'>
        <Paper elevation={3} >
          <Switch>

            <Route history={history} exact path="/">
              <ListPage />
            </Route>

            <Route history={history} path="/planets/:id">
              <PlanetPage />
            </Route>

            <Route history={history} component={NotFound} />

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
