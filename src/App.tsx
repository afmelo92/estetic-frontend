import React, { useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Switch from 'react-switch';
import Header from './components/Header';
import usePersistedState from './hooks/usePersistedState';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Menu right width={200}>
          <div className="switch-container">
            <Switch
              onChange={toggleTheme}
              checked={theme.title === 'dark'}
              onHandleColor="#08f"
              onColor="#2A0F43"
              offColor="#3E1863"
              handleDiameter={20}
              height={30}
              width={60}
            />
          </div>
        </Menu>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
