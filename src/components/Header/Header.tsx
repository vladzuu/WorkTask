import React, { useState } from 'react';

import { Avatar, Badge, BadgeProps, IconButton, styled } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

import useBasket from '../../hooks/useBasket/useBasket';

import UserSetting from '../UserSetting/UserSetting';
import Basket from '../Basket/Basket';

import './header.scss';
import { IHeaderProps } from './types';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 13,
    padding: '0 4px',
  },
}));


const Header: React.FC<IHeaderProps> = ({ logout, firstName, lastName }): JSX.Element => {

  const { totalCountProducts, handleBasket, isOpenBasket } = useBasket();
  const [isHoverBasket, setIsHoverBasket] = useState<boolean>();
  const [isOpenUserSetting, setIsOpenUserSetting] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHoverBasket(true);
  };

  const handleMouseLeave = () => {
    setIsHoverBasket(false);
  };

  const handleUserSetting = () => {
    setIsOpenUserSetting(!isOpenUserSetting);
  };

  return (
    <header className="header-main">
      {isOpenUserSetting && <UserSetting handleClose={handleUserSetting} isOpen={isOpenUserSetting} logout={logout} />}
      {isOpenBasket && <Basket handleClose={handleBasket} isOpen={isOpenBasket} />}
      <div className="logo">
        <span>Name of the site</span>
      </div>
      <div className="header-main-content">
        <StyledBadge badgeContent={totalCountProducts.toString()} color="secondary" >
          <IconButton
            onClick={handleBasket}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <ShoppingBasketIcon color="primary" sx={{
              fontSize: 32,
            }} />
          </IconButton>
        </StyledBadge>
        {(isHoverBasket && totalCountProducts) ? <DropDownMenu /> : null}
      </div>
      <div className="header-main-user">
        <Avatar
          onClick={handleUserSetting}
          alt={`${firstName}-${lastName}`}
          src=""
          className="header-ava-user"
        />
        <span onClick={handleUserSetting} className="header-user-name">{firstName} {lastName}</span>
      </div>
    </header>
  );
};

export default Header;
