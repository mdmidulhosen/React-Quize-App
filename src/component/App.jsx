import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../component/styles/App.css";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import Results from "./Results";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quize from "./pages/Quize";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/quize" element={<Quize />} />
            <Route path="/login" element={<Login />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
