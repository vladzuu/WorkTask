import React from 'react';

import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { IProductItem } from './types';

import './productItem.scss';

const ProductItem: React.FC<IProductItem> = ({
  count,
  nameProduct,
  decreaseProductCount,
  deleteProductBasket,
  increaseProductCount }): JSX.Element => {

  return (
    <div className="item-basket">
      <div className="ava-product-basket"> <Avatar alt={nameProduct} src="" /></div>
      <div className='item-column-basket'>
        <div className='name-product-basket'>{nameProduct}</div>
        <div className="buttons-basket" >
          <IconButton aria-label="decrease" onClick={() => decreaseProductCount(nameProduct)}>
            <RemoveIcon />
          </IconButton>
          {count}
          <IconButton aria-label="increase" onClick={() => increaseProductCount(nameProduct)} >
            <AddIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => deleteProductBasket(nameProduct)} >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
