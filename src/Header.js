import React from "react"

import { ThemeContextConsumer } from "./ThemeContextProvider"

const Header = () => {
  return (
    <div>
      <ThemeContextConsumer>
        {
          context => {
            console.log("Header Theme", context.theme);
            return (
              < header className={`${context.theme}-theme`}> Hello World !!!</header>)
          }


        }
      </ThemeContextConsumer>
    </div >

  )
}

export default Header