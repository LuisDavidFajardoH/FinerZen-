import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const BotonWhatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="573011163954"
      accountName="FinerZen"
      avatar="Images/logo2.svg"
      statusMessage="En línea"
      chatMessage="Bienvenido a FinerZen                    ¿En qué podemos ayudarte?"
      placeholder="Escribe tu mensaje..."
      darkMode={true}
      allowClickAway={true}
      color="black" 
    />
    );
};

export default BotonWhatsapp;