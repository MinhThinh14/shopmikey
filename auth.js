import { auth, signOut, onAuthStateChanged } from './firebase-config.js';
export function logoutUser() { signOut(auth).then(() => { window.location.href = 'index.html'; }); }
export function checkAuth(callback) { onAuthStateChanged(auth, callback); }