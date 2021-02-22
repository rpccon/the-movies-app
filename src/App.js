import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import RouterConfig from "./components/routerConfig/RouterConfig";

function App() {
 // alert("refresh");
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
