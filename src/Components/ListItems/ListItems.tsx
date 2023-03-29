import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { StyledTableCellHead } from '../common/StyledTableCell';
import RowList from './Item/RowList';

import Loader from '../common/Loader/Loader';

import './listItems.scss';
import { IPropsList } from './types';



const ListItems: React.FC<IPropsList> = (props): JSX.Element => {
  const { products } = props;
  const isLoading = useSelector((state: RootState) => state.shopping.isLoading);

  if (isLoading) {
    return <Loader />
  };

  const viewCard = products.map((item) => <RowList {...item} key={item.MGLT} />);

  return (
    <div className='table-products'>
      <TableContainer >
        <Table sx={{ minWidth: 350, maxWidth: 750, }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCellHead sx={{ color: 'white' }}>Name</StyledTableCellHead>
              <StyledTableCellHead>Passengers</StyledTableCellHead>
              <StyledTableCellHead>Crew</StyledTableCellHead>
              <StyledTableCellHead>Price</StyledTableCellHead>
              <StyledTableCellHead>Action</StyledTableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {viewCard}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListItems;
