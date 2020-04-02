import React from "react"

const { Provider, Consumer } = React.createContext()

const ThemeContextProvider = (props) => {
  return (
    <Provider value="dark">
      {props.children}
    </Provider>
  )
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }