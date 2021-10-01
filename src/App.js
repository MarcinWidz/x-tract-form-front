import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";
import Home from "./containers/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
