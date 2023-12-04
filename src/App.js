import './App.css';
import Main from './compont/Main';
import Header from './compont/Header';
import Fotter from './compont/Fotter';
import Extra from './compont/Extra';
import About from './Page/About';
import Contact from './Page/Contact';
import Service from './Page/Service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Portfolio from './Page/Portfolio';
import Blog from './Page/Blog';
import Demo from './Page/Demo';


function App() {
  return (
    <div className='col-12'>
       <Router> 
     <Header/>
     <Switch>
      <Route exact path='/'>
      <Main/>  
      </Route>
      <Route path='/about'>
      <About></About>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>  
      </Route>

      <Route path='/service'>
        <Service></Service> 
      </Route>
      <Route path='/portfolio'>
        <Portfolio></Portfolio> 
      </Route>
      <Route path='/blog'>
        <Blog></Blog>
      </Route>

      <Route path='/demo'>
        <Demo />
      </Route>
     </Switch>
     <Fotter/>
     </Router>
     
     {/* <Extra/> */}
    </div>
  );
}

export default App;
