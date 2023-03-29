import React from 'react';

import { IItemRow } from './types';

import './itemRow.scss'

const ItemRow: React.FC<IItemRow> = ({ count, productName }): JSX.Element => {

  return (
    <p className='drop-item-row'>
      <span>{productName}</span>
      <span>count: {count} </span>
    </p>
  );
};

export default ItemRow;
