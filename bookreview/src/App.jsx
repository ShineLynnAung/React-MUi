import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

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
