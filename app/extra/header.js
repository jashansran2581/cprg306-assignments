import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300 ml-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300 ml-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300 ml-2">
              profile
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300 ml-2">
              login
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
}