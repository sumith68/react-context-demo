import React from "react"

import { ThemeContextConsumer } from "./ThemeContextProvider"

const Header = () => {
  return (
    <div>
      <ThemeContextConsumer>
        {
          theme => {
            console.log("Header Theme", theme);
            return (
              < header className={`${theme}-theme`}> Hello World !!!</header>)
          }


        }
      </ThemeContextConsumer>
    </div >

  )
}

export default Header