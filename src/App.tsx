import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "components/Home/";
function App() {
  return (
    <>
    <Home />
      {/* <Router>
          <Route component={Home} exact href="/" />
      </Router> */}
    </>
  );
}

export default App;
