import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path='/catalog' component={Catalog}></Route>
          <Route path='/catalog/:id' component={ProductDetails} />
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/contact' component={ContactPage}></Route>
      </Container>
    </ThemeProvider>
  );
};

export default App;
