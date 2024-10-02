import React, {useState, useEffect, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../styles/Theme';
import {ThemeContext, ThemeProvider as Provider} from 'styled-components';

const {Light, Dark} = Theme;

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(Dark);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storageTheme = await AsyncStorage.getItem('@RNTheme:theme');

      if (storageTheme) {
        setTheme(JSON.parse(storageTheme));
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function ToggleTheme() {
    setTheme(theme.title === 'dark' ? Light : Dark);

    await AsyncStorage.setItem(
      '@RNTheme:theme',
      JSON.stringify(theme.title === 'dark' ? Light : Dark),
    );
  }

  return (
    <Provider theme={{myTheme: theme, loading, ToggleTheme}}>
      {children}
    </Provider>
  );
};

// export function useTheme() {
//   const context = useContext(ThemeContext);

//   return context;
// }
