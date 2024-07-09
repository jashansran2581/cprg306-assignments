import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-pink-200 fixed w-full top-0 z-50">
      <nav className="flex flex-col items-center px-6 py-4">
        <h1 className="text-7xl font-bold text-black">My Website</h1>
        <div className="flex justify-between w-full mt-4 ">
          <ul className="flex space-x-8 justify-between text-black font-medium ">
            <li>
              <Link href="/extra">Home</Link>
            </li>
            <li>
              <Link href="/ABOUT">About</Link>
            </li>
            <li>
              <Link href="/profile">profile</Link>
            </li>
            <li>
              <Link href="/login_page">login</Link>
            </li>
            <li>
              <Link href="/profile">More</Link>
            </li>
          </ul>
          <ul className="flex space-x-8 text-black font-medium">
            <li>
              <Link href="/">Follow</Link>
            </li>
            <li>
              <Link href="/">Search Icon</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
