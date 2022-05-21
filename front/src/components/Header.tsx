import { AppBar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <AppBar color="primary">
      <Box>
        <Typography variant="h4" hidden component="h1">
          Vector Up |
          <Typography component="span" fontWeight="bold">
            | Soluções Digitais
          </Typography>
        </Typography>
        <Box sx={{
          p:"8px", 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end'
        }}  >
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
          <Link to="/about">
            <Button variant="contained">Sobre</Button>
          </Link>
          <Link to="/contact">
            <Button variant="contained">Contato</Button>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;