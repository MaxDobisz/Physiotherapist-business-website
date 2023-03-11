import { Navbar } from "./components/header/Navbar";
import { Content } from './components/content/Content';
import { Footer } from "./components/footer/Footer";
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(61, 159, 160)',
    },
    secondary: {
      main: 'rgb(35, 91, 110)',
    },
    error: {
      main: '#f3716f',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 790,
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}