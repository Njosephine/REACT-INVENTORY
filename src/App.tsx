
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}
        />
         <Route path="/dashboard" element={<DashboardPage />}
        />
        
      </Routes>
    </Router>
  )
}

export default App;
