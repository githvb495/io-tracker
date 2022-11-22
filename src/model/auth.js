import { auth } from './../controller/firebase';
import { router, routes } from './../router';
import { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  onAuthStateChanged 
} from 'firebase/auth';

async function createUser(email, password) {
  let user = null;
  try {
    user = await createUserWithEmailAndPassword(auth, email, password);
  }
  catch (error) {
    return { error }
  }
  return { user }
}

async function logIn(email, password) {
  let user = null;
  try {
    user = await signInWithEmailAndPassword(auth, email, password);
  }
  catch (error) {
    return { error }
  }
  return { user }
}

async function logOut() {
  let result = null;
  try {
    result = await signOut(auth);
  }
  catch (error) {
    return { error }
  }
  return true
}

async function authStateListener() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('Hi');
      router(routes.dashboard);
    }
    else {
      console.log('(Not) Hi');
      router(routes.login);
    }
  });
}

export { createUser, logIn, logOut, authStateListener };