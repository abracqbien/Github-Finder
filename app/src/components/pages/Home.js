import React, { Fragment } from 'react';

// COMPONENTS
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
