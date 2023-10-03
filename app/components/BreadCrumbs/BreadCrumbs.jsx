'use client'
import Link from "next/link";
import { useMemo } from "react";

const formatPageName = (name) => {
  // Example: Convert 'my-nominations' to 'My Nominations'
  const words = name.split("-");
  const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return formattedName;
};

const Breadcrumb = ({ pageNames }) => {
  const formattedPageNames = useMemo(() => {
    const paths = [];
    let currentPath = "/";
    pageNames.forEach((pageName, index) => {
      currentPath += `${pageName}/`;
      paths.push({ name: formatPageName(pageName), path: currentPath });
    });
    return paths;
  }, [pageNames]);

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
     

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/">
              Dashboard
            </Link>
            {" / "}
          </li>
          {formattedPageNames.map((item, index) => (
            <li key={index}>
              {index === formattedPageNames.length - 1 ? (
                <span className="font-medium text-primary">{item.name}</span>
              ) : (
                <Link href={item.path}>
                  {item.name}
                </Link>
              )}
              {index < formattedPageNames.length - 1 && " / "}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
