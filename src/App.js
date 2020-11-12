import React from "react";
import './styles/App.css';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

import ListPage from './view/list-page'
import PlanetPage from './view/planet-page'
import NavMenu from './components/menu/NavMenu'
import NotFound from './view/not-found-page';

const App = () => {
  return (
    <Router >
      <NavMenu />
      <div className='root'>
        <Paper elevation={3} className='myPapper'>
          <Switch>

            <Route  exact path="/">
              <ListPage />
            </Route>

            <Route path="/planets/:id">
              <PlanetPage />
            </Route>

            <Route  component={NotFound} />

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
