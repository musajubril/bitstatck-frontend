import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/Home/";
import User from "components/User";
import { Notifications } from 'react-push-notification';
import History from "components/History";
function App() {
  return (
    <div className='bg-gray-50'>
    <Notifications />
    <BrowserRouter>
        <Route
        render={({location}) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/user" component={User} />
              <Route exact path="/history" component={History} />
              <Route exact path="/" component={Home} />
            </Switch>
        )}
         />
        </BrowserRouter>
    {/* <Home /> */}
      {/* <Router>
          <Route component={Home} exact href="/" />
      </Router> */}
    </div>
  );
}

export default App;
