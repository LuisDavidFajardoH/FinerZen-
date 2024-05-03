import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static"  component="footer" sx={{ top: 'auto', bottom: 0, backgroundColor:'white' }}>
      <Container maxWidth="md">
        <Toolbar sx={{
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
        }}>
          <Typography variant="body1" color="inherit" sx={{ marginBottom: isMobile ? 2 : 0, marginTop:'3%', color:'black' }}>
            © {new Date().getFullYear()} FinerZen
          </Typography>
          <div >
            <IconButton  sx={{ marginTop: '10%', color:'#A75AC2'}}  component="a" href="https://www.facebook.com/finerzen.finanzas" target="_blank" >
              <FacebookIcon />
            </IconButton>
            <IconButton  sx={{ marginTop: '10%',color:'#A75AC2' }} component="a" href="https://wa.link/uqp62k" target="_blank" color="inherit">
              <WhatsAppIcon />
            </IconButton>
            <IconButton sx={{ marginTop: '10%',color:'#A75AC2' }} component="a" href="https://www.instagram.com/finerzen.finanzas/" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
