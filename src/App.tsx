// import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/Home/";
import User from "components/User";
import History from "components/History";
import ErrorPage from "components/404";
import Fixed from "components/Fixed";
import Flexible from "components/Flexible";
import Landing from "components/Landing";
function App() {
  return (
    <div className='bg-gray-50'>
    <BrowserRouter>
        <Route
        render={({location}) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/user" component={User} />
              <Route exact path="/history" component={History} />
              <Route exact path="/fixed-savings" component={Fixed} />
              <Route exact path="/flexible-savings" component={Flexible} />
              {/* <Route exact path="/history" component={History} /> */}
              <Route exact path="/" component={Landing} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="*" component={ErrorPage} />
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
