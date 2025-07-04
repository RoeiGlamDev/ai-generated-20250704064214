import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-black text-gold py-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/upload">
            <a>Upload</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}