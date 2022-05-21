import { Box, Typography } from '@mui/material';
import React from 'react';
import Section from '../../components/Section';
import Webcity from '../../img/webcity.jpg';
// import { Container } from './styles';

const RedZone: React.FC = () => {
  return (
    <Section key="redzone">
      <Box sx={{
        backgroundColor: "#6cc7b8",
        p: '8px'
      }}>
        <Typography color="#fff" component="h2" variant="h4">
          Boas Vindas
        </Typography>
      </Box>
      <Box>
        <Box component="img" src={Webcity} width="100%" py="8px" />
        <Typography component="p">
          » Entender a importância de se estar conectado atualmente é fundamental para se manter no caminho do sucesso e alcançar seus objetivos, mostrando ao mundo a relevância da sua existência e a de seu negócio.
        </Typography>
        <Typography component="p">
          » Para auxiliar nessa jornada, oferecemos personalidade em comunicação com diversidade visual, utilizando da tecnologia disponível para entregar a qualidade desejada, tentando ao máximo superar as expectativas na entrega de nossos serviços.
        </Typography>
      </Box>
    </Section>
  );
}

export default RedZone;