import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signUp = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  const signIn = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
      <Router>
        <Routes>
          {/* Fix: root route now loads Home */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
