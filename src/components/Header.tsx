"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const APP_ROUTE = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/authors",
      name: "Authors"
    },
    {
      path: "/tags",
      name: "Tags"
    },
    {
      path: "/about",
      name: "About"
    }
  ];
  const pathname = usePathname().toString();
  return (
    <div className="flex justify-center py-5">
      <nav>
        <ul className="flex gap-4">
          {APP_ROUTE.map((e, i) => (
            <Link key={i} href={e.path}>
              <li
                className={clsx(
                  `cursor-pointer px-2 hover:text-blue-400`,
                  pathname === e.path ? `text-blue-400` : ``
                )}
              >
                {e.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
