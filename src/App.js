import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderContainer from "./components/Header/HeaderContainer"
import LogInContainer from "./components/Login/LogInContainer"
import UsersContainer from "./components/Users/UsersContainer"

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route exact path = "/" element = {<LogInContainer />} />
        <Route exact path = "/users" element = {<UsersContainer />} />
      </Routes>
    </>
  )
}

export default App