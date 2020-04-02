import React from "react"

const { Provider, Consumer } = React.createContext()

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    const newTheme = (theme === "dark") ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <Provider value={{ theme, toggleTheme }}>
      {props.children}
    </Provider >
  )
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }