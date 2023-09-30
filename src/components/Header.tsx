import Link from "next/link";

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
  return (
    <div>
      <nav>
        <ul className="flex gap-4">
          {APP_ROUTE.map((e, i) => (
            <Link key={i} href={e.path}>
              <li className="border-purple-300 cursor-pointer border-2 px-2 rounded-sm">
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
