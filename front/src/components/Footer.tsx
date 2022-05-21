import React from 'react';
import { Box, Typography } from '@mui/material';

// import { Container } from './styles';
type Props = {
  appName: string;
}

const Footer: React.FC<Props> = ({ appName }) => {
  return (
    <Box component='footer' sx={{
      width: '100%',
      position: 'fixed',
      color: 'white',
      p: 1,
      backgroundColor: "primary.main",
      bottom: 0,
      textAlign: "center"
    }}>
      <Typography component="p" fontWeight="bold">&copy; {appName} | {new Date().getFullYear()}</Typography>
    </Box>
  );
}

export default Footer;