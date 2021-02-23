import RouterConfig from "./components/routerConfig/RouterConfig";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/:section' component={RouterConfig} />
            <Route path='/'>
              <Redirect to='/home' />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
