import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App(){
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exat path='/register' component={RegisterPage}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='*' component={NotFoundPage}/>
        </Switch>
      </Router>
    </>
  );
}
export default App;
