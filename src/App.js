import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import LoginForm from "./components/Loginform";
import RegistrationForm from "./components/Registerform";
import HomePage from "./components/HomePage"; // Optional home page
import ForgotPasswordForm from "./components/ForgotPasswordform";

function App() {
  const { theme, themeClasses } = useTheme();

  return (
    <Router>
      <div className={`App min-h-screen flex flex-col ${themeClasses[theme].body}`}>
        <Header />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
             <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
