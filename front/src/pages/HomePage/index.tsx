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
        width: '100vw',
        height: 'auto',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        my: '64px',
        justifyContent: 'space-around',
      }} >
      <Box component="img"
        mt='64px'
        mx= '64px'
        src={Logo}
        alt='Vector Up'
        width='auto'
        height='255px'
      />
      <Box sx={{
        width: "100%",
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