import React from 'react';
import { NavLink } from 'react-router-dom';

import './pageNoFound.scss';

const PageNoFound = () => {

  return (
    <div className="page-no-found center-block" >
      <span className="page-no-found__text">Page does not exist</span>
      <NavLink to="/dashboard">
        TO HOME
      </NavLink>
    </div>
  );
};

export default PageNoFound;
