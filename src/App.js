// import logo from './logo.svg';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from './pages/login/login.page'
import PasswordPage from './pages/password/password.page'
import Header from './containers/header/header.container'
import RepoPage from './pages/repo/repo.page';
import CommitPage from './pages/commit/CommitPage.page';
import NotFoundPage from './pages/notFound/NotFoundPage.page';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/login' component={LoginPage} />

        {/* <Route render={() => <Redirect to='login' />} /> */}

        <Route exact path='/password' component={PasswordPage} />
        <Route exact path='/repo/:name' component={CommitPage} />
        <Route exact path='/repo' component={RepoPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
