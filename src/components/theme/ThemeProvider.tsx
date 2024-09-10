import React from 'react'

type IThemeContext = {
  theme: boolean,
  setTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

const ThemeContext = React.createContext<IThemeContext | null>(null);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
}

export const ThemeContextProvider = ({children}: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState(false);

  React.useEffect(() => {
    window.document.documentElement.classList.toggle("dark")
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
