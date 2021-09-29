import "./App.css";
import { Route } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Homepage from "./Views/Homepage/Homepage";
import Resume from "./Views/Resume/Resume";


function App() {
  return (
    <div className="App">
      <Layout/>
        <Route exact path="/">
          <Homepage />
      </Route>
      <Route path='/resume'>
        <Resume />
      </Route>
    </div>
  );
}

export default App;
