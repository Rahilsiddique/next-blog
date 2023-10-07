import Link from "next/link";

const Footer = () => {
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
    <>
      <footer className="pt-2 mt-4 border-t md:flex md:justify-between border-theme-600">
        <div className="flex flex-col w-full space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:max-w-max">
          {APP_ROUTE.map((route) => (
            <Link
              href={route.path}
              key={`footer-${route.path}`}
              className="text-sm font-medium border-b border-transparent border-dashed md:max-w-max hover:border-b-theme-500 text-theme-500 dark:text-theme-400"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
