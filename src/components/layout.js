import * as React from "react"
import Navbar from "./Navbar"

import { GlobalStyle } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <main>{children}</main>
    </>
  )
}

export default Layout
