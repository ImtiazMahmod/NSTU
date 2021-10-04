import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About US/About';
import Academic from './Components/Academic/Academic';
import Chancellor from './Components/Chancellor/Chancellor';
import ViceChancellor from './Components/Vice-Chancellor/ViceChancellor';
import ProViceChancellor from './Components/Pro-Vice-Chancellor/ProViceChancellor';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import AcademicDetail from './Components/AcademicDetail/AcademicDetail';

function App() {
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Header></Header>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <Route path="/academic">
            <Academic></Academic>
          </Route>
          {/* dynamic router */}
          <Route path="/academic/:name">
            <AcademicDetail></AcademicDetail>
          </Route>

          <Route path="/chancellor">
            <Chancellor></Chancellor>
          </Route>
          <Route path="/vice-chancellor">
           <ViceChancellor></ViceChancellor>
          </Route>
          <Route path="/pro-vice-chancellor">
            <ProViceChancellor></ProViceChancellor>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>      
        </Switch>

        {/* footer */}
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
