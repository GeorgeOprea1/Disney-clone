import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import StartPage from "./Pages/StartPage.jsx";
import LogInPage from "./Pages/LogInPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import ContentPage from "./Pages/ContentPage.jsx";
import { auth } from "../src/firebase/config.js";

const App = () => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authReady) {
    return null;
  }

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage user={user} />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/content"
            element={user ? <ContentPage user={user} /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
