import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase/config';

// Create context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // Sign up function
  const signup = async (email, password, displayName) => {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update profile with display name
      await updateProfile(user, { displayName });

      // Create user document in Firestore
      const userDoc = {
        uid: user.uid,
        email: user.email,
        displayName,
        createdAt: new Date(),
        lastLogin: new Date(),
        progressData: {
          modules: {
            1: { completed: false, progress: 0 },
            2: { completed: false, progress: 0 },
            3: { completed: false, progress: 0 }
          },
          totalCompletedModules: 0,
          userLevel: 'Beginner'
        }
      };

      // Save user document to Firestore
      await setDoc(doc(firestore, 'users', user.uid), userDoc);

      return user;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Update last login time
      const userRef = doc(firestore, 'users', userCredential.user.uid);
      await setDoc(userRef, { lastLogin: new Date() }, { merge: true });

      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    return signOut(auth);
  };

  // Password reset function
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Fetch user profile
  const fetchUserProfile = async (uid) => {
    try {
      const userDoc = await getDoc(doc(firestore, 'users', uid));
      if (userDoc.exists()) {
        setUserProfile(userDoc.data());
        return userDoc.data();
      }
      return null;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  // Update user profile
  const updateUserProfile = async (updates) => {
    if (!currentUser) throw new Error('No user logged in');

    try {
      // Update Firebase Authentication profile if display name is provided
      if (updates.displayName) {
        await updateProfile(currentUser, { displayName: updates.displayName });
      }

      // Update Firestore document
      const userRef = doc(firestore, 'users', currentUser.uid);
      await setDoc(userRef, updates, { merge: true });

      // Refetch and update local profile
      await fetchUserProfile(currentUser.uid);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      
      if (user) {
        // Fetch user profile when logged in
        fetchUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    // Cleanup subscription
    return unsubscribe;
  }, []);

  // Context value
  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    fetchUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
