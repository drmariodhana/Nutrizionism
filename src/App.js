import React from 'react';
import './App.css';
import './css/clean-blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Routing } from './Routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <Header />
      <Routing />
    </Router>
    <Footer />
  </>);
}

export default App;
