import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from './Navbar';
import Service from "./Service";
function App() {
  return (
    <div className="App">
      <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/service' component={Service} />
       <Route path='/contact' component={Contact} />
       <Redirect to='/' />
     </Switch>
    </div>
  );
}

export default App;
