import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} /> {/* Default route for Login Form */}
          <Route path="/register" element={<RegistrationForm />} /> {/* Route for Registration Form */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
