import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ children }) => {
  return (
    <Box component='section'
      sx={{
        height: 'auto',
        width: '80%',
        borderLeft: `3px solid`,
        borderColor: 'primary.main',
        px: '8px',
        mb: '16px'
      }}>
      {children}
    </Box>
  );
}

export default Section;