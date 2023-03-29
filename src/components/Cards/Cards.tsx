import { useSelector } from 'react-redux';
import React from 'react';

import { RootState } from '../../store/store';

import Loader from '../common/Loader/Loader';
import CardProduct from './CardProduct/CardProduct';

import { IPropsCards } from './types';

import './cards.scss';

const Cards: React.FC<IPropsCards> = ({ products, title }): JSX.Element => {

  const isLoading = useSelector((state: RootState) => state.shopping.isLoading);
  const viewCard = products.map((item) => <CardProduct {...item} key={item.MGLT} />);

  if (isLoading) {
    return <Loader />
  };

  return (
    <div className='cards'>
      {viewCard}
    </div>
  );
};

export default Cards;
