import React from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';

import Home from '../../components/home';
import One from '../../components/one';
import Two from '../../components/two';

const Dashboard = () => (
<>
  <h1>Dashboard!</h1>
  <nav>
    <ul>
      <li>
        <Link to="/app/dashboard">Home</Link>
      </li>
      <li>
        <Link to="/app/dashboard/one">One</Link>
      </li>
      <li>
        <Link to="/app/dashboard/two">Two</Link>
      </li>
    </ul>
  </nav>
  <Router>
    <Home path="/app/dashboard" />
    <One path="/app/dashboard/one" />
    <Two path="/app/dashboard/two" />
  </Router>
</>
);

export default Dashboard;
