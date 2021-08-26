import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Routes from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
