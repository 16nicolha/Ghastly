import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signUp = async () => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    setUser(userCred.user);
  };

  const signIn = async () => {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCred.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
      <div>
        {user ? (
            <>
              <h2>Welcome {user.email}</h2>
              <button onClick={logout}>Logout</button>
            </>
        ) : (
            <>
              <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
              <button onClick={signUp}>Sign Up</button>
              <button onClick={signIn}>Sign In</button>
            </>
        )}
      </div>
  );
}

export default App;
