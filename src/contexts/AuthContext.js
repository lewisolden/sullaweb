import React, { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Mock sign up function (stores user in local state)
  function signUp(name, email, password) {
    const fakeUser = { name, email, uid: "mock-user-id" };
    setCurrentUser(fakeUser);
    return fakeUser;
  }

  // Mock login function
  function login(email, password) {
    const fakeUser = { name: "Test User", email, uid: "mock-user-id" };
    setCurrentUser(fakeUser);
    return fakeUser;
  }

  // Logout function
  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for consuming auth context
export function useAuth() {
  return useContext(AuthContext);
}
