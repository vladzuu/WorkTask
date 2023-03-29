import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import { Avatar, Button } from '@mui/material';
import useBasket from '../../../hooks/useBasket/useBasket';
import { IDataResponse } from '../../../store/slice/shopping/types';

import './cardProduct.scss'

const CardProduct: React.FC<IDataResponse> = (props) => {
  const { length, name, passengers, cost_in_credits, crew } = props;
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>()
  const { addProductToBasket, stateBasket, handleBasket } = useBasket()

  const handleAddProduct = () => {
    addProductToBasket(name);
  };

  useEffect(() => {
    const findElem = Object.entries(stateBasket).some(([nameProduct]) => name === nameProduct)
    setIsDisabledButton(findElem)
  }, [stateBasket])

  return (
    <Card className="card-product">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="card-header">
          <Avatar alt={name} src="" />
          <Typography variant="h5">{name}</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Passengers: {passengers} people
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Crew: {crew} people
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Crew: {crew} people
        </Typography>
        <Typography variant="body2" color="text.secondary">
          length: {length} meter
        </Typography>
      </CardContent>
      <CardActions className="cart-footer">
        <Typography variant="body2" color="text.secondary">Price:{cost_in_credits}</Typography>
        {isDisabledButton
          ? <Button className='card-button' onClick={handleBasket} size="small" color="success">In basket</Button>
          : <Button className='card-button' onClick={handleAddProduct} size="small">Buy</Button>}
      </CardActions>
    </Card>
  );
};

export default CardProduct;