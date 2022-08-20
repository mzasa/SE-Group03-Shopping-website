import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
           <Login/>
          </Route>
          <Route path='/signup'>
           <Signup/>
          </Route>
          <Route path='/result'>
           <SearchResult/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
