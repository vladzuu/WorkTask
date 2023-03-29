import React, { useEffect, useState } from 'react';

import { StyledTableCell } from '../../common/StyledTableCell';
import { Avatar, Button, TableRow } from '@mui/material';

import { IDataResponse } from '../../../store/slice/shopping/types';
import useBasket from '../../../hooks/useBasket/useBasket';

import './rowList.scss';

const RowList: React.FC<IDataResponse> = (props) => {

  const [isDisabledButton, setIsDisabledButton] = useState<boolean>()
  const { name, passengers, cost_in_credits, crew } = props;
  const { addProductToBasket, stateBasket, handleBasket } = useBasket()

  const handleAddProduct = () => {
    addProductToBasket(name);
  };

  useEffect(() => {
    const findElem = Object.entries(stateBasket).some(([nameProduct]) => name === nameProduct)
    setIsDisabledButton(findElem)
  }, [stateBasket])

  return (
    <TableRow className='products-table-row'>
      <StyledTableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Avatar className='img' alt={name} src="" />
        {name}
      </StyledTableCell>
      <StyledTableCell>{passengers}</StyledTableCell>
      <StyledTableCell>{crew}</StyledTableCell>
      <StyledTableCell>{cost_in_credits}</StyledTableCell>
      <StyledTableCell>
        {isDisabledButton
          ? <Button className='cell-button' onClick={handleBasket} size="small" color='success'>In basket</Button>
          : <Button className='cell-button' onClick={handleAddProduct} size="small">Buy</Button>}
      </StyledTableCell>
    </TableRow>
  );
};

export default RowList;