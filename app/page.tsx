"use client";
import { firebaseApp } from "@/src/lib/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    // Ensure firebase loads without crashing
    if (firebaseApp) setOk(true);
  }, []);
  return (
    <main style={{ padding: 24 }}>
      <h1>SafeCall Admin</h1>
      <p>Status: {ok ? "Firebase initialized ✅" : "Loading…"}</p>
      <h2>Config check</h2>
      <ul>
        <li>Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</li>
        <li>Auth Domain: {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}</li>
        <li>App ID: {process.env.NEXT_PUBLIC_FIREBASE_APP_ID}</li>
      </ul>
    </main>
  );
}
