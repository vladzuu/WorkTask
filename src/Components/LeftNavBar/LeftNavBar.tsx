import React from 'react';
import { NavLink } from 'react-router-dom';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

import './leftNavBar.scss'

const LeftNavBar: React.FC = (): JSX.Element => {

  return (
    <nav className="left-nav-bar">
      <ul>
        <li><NavLink to='/dashboard'>
          <span className='svg'><AccountBalanceWalletIcon className='logo-link' /></span>
          <span>Dashboard</span>
        </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            <span className='svg'><AutoAwesomeMosaicIcon className='logo-link' /></span>
            <span>Example</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            <span className='svg'><AssessmentIcon className='logo-link' /></span>
            <span>Example</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            <span className='svg'><AccountBalanceIcon className='logo-link' /></span>
            <span>Example</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            <span className='svg'><AutoAwesomeMosaicIcon className='logo-link' /></span>
            <span>Example</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNavBar;
