import React from 'react';
import { NavLink } from 'react-router-dom';
import Comics from './Comics';
import md5 from 'md5';

function Home() {
  return (
    <div>
      <NavLink to="/comics">Comics</NavLink>
    </div>
  );
}

export default Home;