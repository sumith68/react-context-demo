import React from "react"
import { ThemeContextConsumer } from "./ThemeContextProvider"

const Button = () => {



  return (
    <div>
      <ThemeContextConsumer>
        {
          context => {
            console.log("Button Theme", context.theme)
            return (<button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>)
          }
        }
      </ThemeContextConsumer>

    </div>

  )
}

export default Button