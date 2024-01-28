import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboad">
          <Route/>
        </Route>
        <Route path="/" Component={HomePage}/>
        <Route path="login"/>
        <Route path="register"/>
      </Routes>
    </div>
  )
}

export default App