import { initializeApp, getApps, getApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import env from "./env";

const app =
  getApps().length === 0 ? initializeApp(env.firebaseConfig) : getApp();

export const auth = getAuth(app);

export default app;

export const firestoreDb = getFirestore();
