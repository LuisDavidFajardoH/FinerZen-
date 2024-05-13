import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

// Opcional: Importa algún ícono si deseas añadirlo al separador
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Separator = ({ text }) => {
  return (
    <Box sx={{
      width: '100%',
      my: 4, // margen vertical para separación
      display: 'flex',
      fontFamily: 'Raleway',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 13,
      marginBottom: 13,
    }}>
      <Divider sx={{
        flexGrow: 1,
        borderColor: 'transparent', // elimina el color por defecto del Divider
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(99,99,99,0.5), rgba(0,0,0,0))',
        fontFamily: 'Raleway',
      }} />
      {text && (
        <Box sx={{
          mx: 2, // margen horizontal si hay texto
          display: 'flex',
          alignItems: 'center',  
          fontFamily: 'Raleway',
        }}>
          <StarBorderIcon sx={{ mr: 1, color: '#FCCD1F', fontSize: 50, fontFamily: 'Raleway', }} /> {/* Ícono opcional */}
          <Typography variant="caption" sx={{ color: 'black', fontSize: 30, fontFamily: 'Raleway', }}>
            {text}
          </Typography>
        </Box>
      )}
      <Divider sx={{
        flexGrow: 1,
        borderColor: 'transparent',
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(99,99,99,0.5), rgba(0,0,0,0))',
        fontSize: "50px"
      }} />
    </Box>
  );
};

export default Separator;
