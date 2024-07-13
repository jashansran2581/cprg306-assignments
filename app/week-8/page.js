"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    if (user) {
      console.log("User logged in:", user);
    } else {
      console.log("No user logged in");
    }
  }, [user]);

  return (
    <div className="py-10 flex min-h-screen items-center place-content-center">
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button className="rounded-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200" onClick={firebaseSignOut}>Log Out</button>
          <Link href="/week-8/shopping-list">
            <button className="rounded-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Go to Shopping List</button>
          </Link>
        </>
      ) : (
        <button className="rounded-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200" onClick={gitHubSignIn}>Log In with GitHub</button>
      )}
    </div>
  );
}
