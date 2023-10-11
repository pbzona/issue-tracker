"use client";

import { AiFillBug } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

type NavLink = {
  label: string;
  href: string;
}

const NavBar = () => {
  const currentPath = usePathname();

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
                className={classNames({
                  "text-zinc-900": link.href === currentPath,
                  "text-zinc-500": link.href !== currentPath,
                  "hover:text-zinc-800 font-medium transition-colors": true
                })}
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