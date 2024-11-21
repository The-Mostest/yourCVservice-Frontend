import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import { getUser } from "./utils/auth"
import { removeToken } from "./utils/auth"

import Homepage from "./Pages/Homepage/Homepage"
import SignUp from "./Pages/SignUp/SignUp"
import SignIn from "./Pages/SignIn/SignIn"
import LandingPage from "./Pages/LandingPage/Landpage"
import ShowInterview from "./Pages/JobInterview/ShowInterview/ShowInterview"
import UpdateInterview from "./Pages/JobInterview/UpdateInterview/UpdateInterview"
import NavBar from "./Components/NavBar/NavBar"
import CVPage from "./Pages/CV/CV"
import Advice from "./Pages/Advice/Advice"
import NotFound from "./Pages/404"
import IndexInterview from "./Pages/JobInterview/IndexInterview/IndexInterview"

function App() {
  const [user, setUser] = useState(getUser())
  const handleSignOut = async () => {
    removeToken()
    setUser(null)

  }

  return (
    <>
      <nav>
        <NavBar user={user} handleSignOut={handleSignOut} setUser={setUser} />
      </nav>

      <Routes>
        {user ? (
          <>
            <Route path="" element={<Homepage user={user}/>} />
            <Route path="jobinterview/" element={<IndexInterview  />} />
            <Route path="jobinterview/:jobId/" element={<ShowInterview />} />
            <Route path="jobinterview/:jobId/edit/" element={<UpdateInterview />} />
            <Route path="CV/" element={<CVPage user={user} />} />
          </>
        ) : (
          <>
            <Route path="" element={<LandingPage setUser={setUser} />} />
            <Route path="signup/" element={<SignUp setUser={setUser} />} />
            <Route path="signin/" element={<SignIn setUser={setUser} />} />
          </>
        )}
        <Route path="advice/" element={<Advice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
