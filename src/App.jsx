import Index from "./Pages/Index";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./components/Theme/theme";
import LandingPage from "./Pages/landing";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/encuesta" element={<Index />} />
        </Routes>
      </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;
