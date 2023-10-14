import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Accaunt from "./pages/Accaunt";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { AuthContexProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthContexProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/accaunt" element={<ProtectedRoute><Accaunt /></ProtectedRoute>} />
        </Routes>
        <Footer/>
      </AuthContexProvider>
    </>
  );
}

export default App;
