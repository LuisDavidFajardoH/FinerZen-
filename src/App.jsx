import Index from "./Pages/Index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Index />
  </ThemeProvider>
  );
}

export default App;
