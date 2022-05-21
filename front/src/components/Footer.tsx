import React from 'react';
import { Box, Typography } from '@mui/material';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Box sx={{
        width: '100%',
        position: 'fixed',
        color: 'white',
        p: 1,
        backgroundColor:"primary.main",
        bottom: 0,
        textAlign:"center"
      }}>
        <Typography component="p" fontWeight="bold">&copy; Vector Up | {new Date().getFullYear()}</Typography>
      </Box>
  );
}

export default Footer;