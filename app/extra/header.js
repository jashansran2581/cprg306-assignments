import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:text-gray-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:text-gray-300">About</a>
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
}
