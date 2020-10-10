import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);

  async function signIn(email, password) {
    const response = await auth.signIn(email, password);
    if (response.email) {
      setUser(response);
      setSigned(true);
    }
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
