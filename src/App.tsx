import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/Home/";
function App() {
  return (
    <>
    <BrowserRouter>
        <Route
        render={({location}) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
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
