import { AiFillBug } from "react-icons/ai";
import Link from "next/link";
import React from "react";

type NavLink = {
  label: string;
  href: string;
}

const NavBar = () => {
  const links: NavLink[] = [
    {
      label: "Dashboard",
      href: "/"
    },
    {
      label: "Issues",
      href: "/issues"
    },
  ];
  return (
    <nav className="flex space-x-6 border-b px-6 mb-5 h-14 items-center">
      <Link href="#">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {
          links.map(link => (
            <li key={link.label}>
              <Link
                className="text-zinc-500 hover:text-zinc-800 transition-colors"
                href={link.href}
              >
                { link.label }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;