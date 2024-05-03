// Navbar.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../../assets/Logo.svg";
import "./Navbar.css"; // Asegúrate de que el archivo está en la ubicación correcta y no contiene errores

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Asegúrate de que el logo se muestra correctamente */}
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "5%",
              
              marginRight: "auto",
              padding: "1%",
            }}
          />

          {/* El componente Hidden esconde los elementos basado en el tamaño de la pantalla */}
          <Hidden mdDown>
            {/* Estos botones solo se mostrarán en pantallas más grandes que 'sm' */}
            <IconButton
              component="a"
              href="https://wa.link/uqp62k"
              target="_blank"
              sx={{
                color: "#A75AC2",
                "&:hover": { backgroundColor: "#FCCD1F" },
                padding: "1%",
              }}
            >
              <WhatsAppIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/finerzen.finanzas/"
              target="_blank"
              sx={{
                color: "#A75AC2",
                "&:hover": { backgroundColor: "#FCCD1F" },
                padding: "1%",
              }}
            >
              <InstagramIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/finerzen.finanzas"
              target="_blank"
              sx={{
                color: "#A75AC2",
                "&:hover": { backgroundColor: "#FCCD1F" },
                padding: "1%",
              }}
            >
              <FacebookIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            {/* Este botón de menú solo se mostrará en pantallas tamaño 'md' o más pequeñas */}
            <IconButton
              sx={{
                color: "black",
                "&:hover": { backgroundColor: "#A75AC2" },
              }}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <List sx={{ width: "4%", color: "black" }} onClick={handleDrawerClose}>
          <ListItem button>
            
            <IconButton
            href="https://wa.link/uqp62k"
            target="_blank"
              sx={{
                color: "#A75AC2",
                "&:hover": { backgroundColor: "#FCCD1F" },
                margin: "1%",
              }}
            >
              <WhatsAppIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </ListItem>

          <IconButton
          href="https://www.instagram.com/finerzen.finanzas/"
          target="_blank"
            sx={{
              color: "#A75AC2",
              "&:hover": { backgroundColor: "#FCCD1F" },
              marginLeft: "400%",
            }}
          >
            <InstagramIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <ListItem button>
            <IconButton
              href="https://www.facebook.com/finerzen.finanzas"
              target="_blank"
              sx={{
                color: "#A75AC2",
                "&:hover": { backgroundColor: "#FCCD1F" },
                margin: "1%",
              }}
            >
              <FacebookIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
