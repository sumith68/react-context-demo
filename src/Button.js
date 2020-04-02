import React from "react"
import { ThemeContextConsumer } from "./ThemeContextProvider"

const Button = () => {
  return (
    <div>
      <ThemeContextConsumer>
        {
          theme => {
            console.log("Button Theme", theme)
            return (<button className={`${theme}-theme`}>Switch Theme</button>)
          }
        }
      </ThemeContextConsumer>

    </div>

  )
}

export default Button