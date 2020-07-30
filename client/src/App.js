import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Router} from '@reach/router';
import Dashboard from './components/Dashboard';
import PetForm from './components/PetForm';
import Edit from './components/Edit';
import Pet from './components/Pet';
import About from './components/About';



function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <img className="m-2" src="/img/dog-paw.png" width="18px" alt="paw"/>
        <Link className="navbar-brand text-success m-2 lead" to="/">petshelter.com</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-info lead active" href="/">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-info lead" href="/pets">Our Buddies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-info lead" href="/pets/new">Post a Pet</a>
            </li>

          </div>
        </div>
      </nav>
      <Router>
        <Dashboard path="/pets"/>
        <PetForm path="/pets/new"/>
        <Edit path="/pets/:_id/edit"/>
        <Pet path="/pets/:_id"/>
        <About path="/"/>
      </Router>
    </div>

  );
}

export default App;
