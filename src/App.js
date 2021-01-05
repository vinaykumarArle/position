import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateFloorPlan from './createFloorPlan'
import FloorPlan from './FloorPlan'


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CreateFloorPlan} />
        <Route path="/FloorPlan" component={FloorPlan} />
      </Switch>
    </Router>
  );
}
export default App;
