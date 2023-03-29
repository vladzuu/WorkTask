import React from 'react';

import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { IPropsUserSetting } from './types';

import './userSetting.scss';

const UserSetting: React.FC<IPropsUserSetting> = ({ handleClose, isOpen, logout }): JSX.Element => {

  const handleLogOut = () => {
    logout();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='box-user-setting'>
        <div className='box-modal-title'>
          <Typography width={'100%'} id="modal-modal-title" variant="h6" component="h2" align='center'>
            User Setting
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography id="modal-modal-description" className='modal-box-button'>
          <Button variant='contained' onClick={handleLogOut}>LogOut</Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default UserSetting;
