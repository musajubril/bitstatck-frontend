import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/Home/";
import User from "components/User";
import { Notifications } from 'react-push-notification';
function App() {
  return (
    <>
    <Notifications />
    <BrowserRouter>
        <Route
        render={({location}) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={User} />
            </Switch>
        )}
         />
        </BrowserRouter>
    {/* <Home /> */}
      {/* <Router>
          <Route component={Home} exact href="/" />
      </Router> */}
    </>
  );
}

export default App;
