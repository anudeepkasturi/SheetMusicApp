import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Header from './header';
import Drawer from './drawer/drawer';
import Page from './page/page';
import Test from './test';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>

        <Route path="/" components={ App }>

        </Route>
    </Router>
  </Provider>
);

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Header/>
        <Drawer/>
        <Page/>
      </div>
    </MuiThemeProvider>
  );
}

export default Root;
