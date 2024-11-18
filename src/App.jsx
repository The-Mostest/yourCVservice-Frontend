import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import { getUser } from "./utils/auth"

import Homepage from "./Pages/Homepage/Homepage"
import SignUp from "./Pages/SignUp/SignUp"
import SignIn from "./Pages/SignIn/SignIn"
import LandingPage from "./Pages/LandingPage/Landpage"
import ShowInterview from "./Pages/JobInterview/ShowInterview/ShowInterview"
import UpdateInterview from "./Pages/JobInterview/UpdateInterview/UpdateInterview"
import NavBar from "./Components/NavBar/NavBar"
import CVPage from "./Pages/CV/CV"

function App() {
const [user, setUser] = useState(getUser())


  return (
    <>
    <nav>
    <NavBar />
    </nav>

    <Routes>
      {user ? 
      <Route path="/" element={<Homepage />}/>
      :
      <Route path="/" element={<LandingPage />}/>
    }
      <Route path="/signup/" element={<SignUp setUser={setUser} />}/>
      <Route path="/signin/" element={<SignIn />}/>
      <Route path="/jobinterview" element={<ShowInterview />}/>
      <Route path="/jobinterview/:jobId/edit" element={<UpdateInterview />}/>
      <Route path="/advice" element={<Homepage />}/>
      <Route path="/CV" element={<CVPage />}/>
    </Routes>

    </>
  )
}

export default App
