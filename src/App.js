import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
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
