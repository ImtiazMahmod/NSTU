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
import AcademicDetails from './Components/AcademicDetails/AcademicDetails';
import ChatBot from './ChatBot';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState();
  return (
    <div className="App">
      <Router>
        {/* header */}
        
      
        <Switch>
          <Route exact path="/">
        <Header></Header>
            <Home></Home>
      <Footer></Footer>
          </Route>
          <Route path="/home">
        <Header></Header>
            <Home></Home>
      <Footer></Footer>
          </Route>
          <Route path="/about">
        <Header></Header>
           <About></About>
      <Footer></Footer>
          </Route>

          <Route path="/academic">
        <Header></Header>
            <Academic></Academic>
      <Footer></Footer>
          </Route>
          
          <Route path="/academy/:name">
        <Header></Header>
            <AcademicDetails></AcademicDetails>
      <Footer></Footer>
          </Route>
        
          <Route path="/chancellor">
        <Header></Header>
            <Chancellor></Chancellor>
      <Footer></Footer>
          </Route>
          <Route path="/vice-chancellor">
        <Header></Header>
           <ViceChancellor></ViceChancellor>
      <Footer></Footer>
          </Route>
          <Route path="/pro-vice-chancellor">
        <Header></Header>
            <ProViceChancellor></ProViceChancellor>
      <Footer></Footer>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>      
         

        </Switch>
        <div className='bot'>
          <img
            onClick={setShow}
            width={90}
            src="https://i.ibb.co/Wn1KF32/chat1.png"
            alt="support"
          />
        
          <ChatBot show={show} setShow={setShow} />
          
        </div>
        {/* footer */}
      </Router>
    </div>
  );
}

export default App;
