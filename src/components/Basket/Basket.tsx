import React from 'react';

import { Box, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import useBasket from '../../hooks/useBasket/useBasket';

import ProductItem from './ProductItem/ProductItem';

import { IBasketProps } from './types';

import './basket.scss'

const Basket: React.FC<IBasketProps> = ({ isOpen, handleClose }): JSX.Element => {
  const { stateBasket, increaseProductCount, decreaseProductCount, deleteProductBasket, totalCountProducts } = useBasket()

  const productsInBasket = Object.entries(stateBasket).map(([nameProduct, count]) => <ProductItem
    nameProduct={nameProduct}
    count={count}
    increaseProductCount={increaseProductCount}
    decreaseProductCount={decreaseProductCount}
    deleteProductBasket={deleteProductBasket}
  />)

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='box-basket' >
        <a className='basket-header'>
          <Typography width={'100%'} id="modal-modal-title" variant="h6" component="h2" align='center'>
            Cart
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </a>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {(totalCountProducts) ? productsInBasket : <span className='empty-basket'>Basket is empty</span>}
        </Typography>
      </Box>
    </Modal>
  );
};

export default Basket;
