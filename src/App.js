// src/App.js
import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase-config";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photoURL} alt="User Avatar" style={{ borderRadius: "50%", marginTop: "20px" }} />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Sign in with Google</h1>
          <button onClick={handleLogin} style={buttonStyle}>
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#4285F4",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default App;
