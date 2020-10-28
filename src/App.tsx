import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Secret from './components/Secret';

import AppPage from './components/AppPage';
import AppPage01 from './components/AppPage01';
import AppPage02 from './components/AppPage02';

// import Chatbot from './containers/Chatbot/Chatbot';
// import Analize from './containers/Analize/Analize';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#d7385e',
          // main: '#d2f5e3',
          // main: '#556cd6',
        },
        secondary: {
            main: '#cc0e74',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f1f3f8',
        },
    },
});


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/signIn' component={SignIn} />
              <Route exact path='/signUp' component={SignUp} />
              {/* <Route exact path='/secret' component={Secret} /> */}
              <Route exact path='/appPage' component={AppPage} />

              <Route exact path='/func04' component={Secret} />

              <Route exact path='/dashboard' component={AppPage} />
              <Route exact path='/chatbot' component={AppPage01} />
              <Route exact path='/analize' component={AppPage02} />

              <Route exact path='/signout' component={Main} />
            </Switch>
        </Router>
      </ThemeProvider>  
    </>
  );
}

export default App;
