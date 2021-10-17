import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Home from './pages/Home';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
