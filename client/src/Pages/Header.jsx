import React from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Top Foods", href: "#" },
  { name: "Compare Price", href: "#" },
  { name: "News Feed", href: "#" },
];

function Header() {
  return (
    <div className="w-full bg-gray-600 z-10 relative ">
      <nav
        className="relative flex items-center justify-right w-full h-16"
        aria-label="Global"
      >
        <div className="flex items-center cursor-pointer">
          <div className="relative left-10 rounded-full bg-green-400 p-2">
            <img src="./harvest.png" width="35px" alt="" />
          </div>
          <div className="text-xl px-4 py-2 ml-10 font-medium text-white hover:text-black">
            Food Pedia
          </div>
        </div>

        <div className="ml-10 pr-4 right-10 absolute">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-white hover:text-gray-900 px-2 ml-4"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/#"
            className="items-center ml-4 font-medium text-indigo-600 hover:text-white hover:bg-gray-700 p-2 rounded-full bg-white"
          >
            Log in
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
