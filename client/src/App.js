import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Header from "./Pages/Header";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
          <div className="main_components">
            <Switch>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
