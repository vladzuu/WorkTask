import React from 'react';
import { NavLink } from 'react-router-dom';

import './pageNoFound.scss';

const PageNoFound = () => {

  return (
    <div className="page-no-found">
      <span className="page-no-found__text">Page does not exist</span>
      <NavLink to="/dashboard">
        <button>TO HOME</button>
      </NavLink>
    </div>
  );
};

export default PageNoFound;
