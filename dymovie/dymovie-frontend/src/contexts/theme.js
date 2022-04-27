import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dark from '../styles/Theme/Dark';
import Light from '../styles/Theme/Light';

//Define o formato/tipagem do contexto e nao o valor default. Ideal para typeScript
const ThemeContext = createContext({});

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
    <ThemeContext.Provider value={{theme, ToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
