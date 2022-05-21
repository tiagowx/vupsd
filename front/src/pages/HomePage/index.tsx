import React from 'react';
import { Box, Grid } from '@mui/material';
import Services from './Services';
import Contact from './Contact';
import RedZone from './RedZone';
import Logo from '../../img/logo-vup.png';

// import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Grid component="main"
      sx={{
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        mt: '64px',
        justifyContent: 'space-around',
      }} >
      <Box component='h1'>
        <Box component="img"
          pt='64px'
          px='64px'
          src={Logo}
          alt='Vector Up'
          width='100%'
        />
      </Box>
      <Box sx={{
        width: "auto",
        height: "calc(100vh - 112px)",
        flexDirection: "column",
        overflowY: "scroll"
      }}>
        <RedZone />
        <Services />
        <Contact />
      </Box>
    </Grid>
  );
}

export default HomePage;