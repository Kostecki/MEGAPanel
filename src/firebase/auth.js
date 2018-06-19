import { auth } from './firebase';

//Log in
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

//Log out
export const doSignOut = () =>
  auth.signOut();

//Rese Password
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

//Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);