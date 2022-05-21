import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Theme from './themes';

function App() {
  return (
    <ThemeProvider theme={Theme} >
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
