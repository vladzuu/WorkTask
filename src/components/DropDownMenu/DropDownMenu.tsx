import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import { Card } from '@mui/material';
import ItemRow from './ItemRow/ItemRow';

import './dropDownMenu.scss';

const DropDownMenu: React.FC = (): JSX.Element => {

  const basket = useSelector((state: RootState) => state.shopping.basket.products);
  const all = Object.entries(basket).map(([key, count]) => <ItemRow productName={key} count={count} key={key} />);

  return (
    <div className="drop-menu">
      <Card className="card-drop-menu">
        {all.length ? all : 'Basket is empty'}
      </Card>
    </div>
  );
};

export default DropDownMenu;
