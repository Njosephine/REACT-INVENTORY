
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}
        />
         {/* <Route path="/register" element={<RegisterPage />}
        /> */}
        
      </Routes>
    </Router>
  )
}

export default App;
