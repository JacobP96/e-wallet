import './App.css';
import HomePage from "./pages/HomePage"
import AddCard from './pages/AddCard';
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact
          path="/"
          render={(props) => <HomePage  {...props} />}/>
          <Route
          path="/AddCard"
          render={(props) => <AddCard {...props} />}/>
      </Switch>
   
    </div>
  );
}

export default App;
