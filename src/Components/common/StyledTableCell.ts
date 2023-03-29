import { styled, TableCell, } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 8,
    fontSize: 12,
  },
  [theme.breakpoints.up('sm')]: {
    padding: 16,
    fontSize: 16,
  },
}));


export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    padding: 8,
    fontSize: 12,
  },
  [theme.breakpoints.up('sm')]: {
    padding: 16,
    fontSize: 16,
  },
}));