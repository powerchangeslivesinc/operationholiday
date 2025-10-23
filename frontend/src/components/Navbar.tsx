// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

// Define the structure for each menu item
type MenuItem = {
  label: string;
  path?: string;
  children?: MenuItem[];
};

// Define all menu items with submenus and nested submenus
const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Programs",
    children: [
      {
        label: "Operation Holiday at Home",
        children: [
          { label: "Applicants", path: "/programs/holidayathome/applicants" },
          { label: "Donors", path: "/programs/holidayathome/donors" },
          { label: "FAQs", path: "/programs/holidayathome/faqs" },
        ],
      },
      {
        label: "Santa’s Village",
        children: [
          { label: "Tickets", path: "/programs/santasvillage/tickets" },
          {
            label: "Partner Registration",
            path: "/programs/santasvillage/partners",
          },
          {
            label: "Vendor Registration",
            path: "/programs/santasvillage/vendors",
          },
        ],
      },
      {
        label: "Mrs. Claus",
        children: [
          { label: "Meet Mrs. Claus", path: "/programs/mrsclaus/meet" },
          { label: "Gallery", path: "/programs/mrsclaus/gallery" },
        ],
      },
    ],
  },
  { label: "Volunteer", path: "/volunteer" },
  {
    label: "About Us",
    children: [
      { label: "Contact", path: "/about/contact" },
      { label: "Leadership", path: "/about/leadership" },
    ],
  },
  {
    label: "Donate",
    children: [
      { label: "Giving", path: "/donate/giving" },
      { label: "Toys", path: "/donate/toys" },
    ],
  },
];

// Recursive component to render menu items and submenus
interface NavItemProps {
  item: MenuItem;
}

const Submenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const [active, setActive] = useState<string | null>(items[0]?.label || null);

  const activeItem = items.find((item) => item.label === active);

  // Only show right panel if the active item has its own children
  const showRightPanel = activeItem?.children && activeItem.children.length > 0;

  return (
    <div
      className={`absolute left-0 top-full bg-gray-900 text-white rounded shadow-lg z-50 flex p-2 ${
        showRightPanel ? "min-w-[400px]" : "min-w-[160px]"
      }`}
    >
      {/* Left side - headers */}
      <div
        className={`flex flex-col ${
          showRightPanel ? "w-40 border-r border-gray-700" : "w-full"
        }`}
      >
        {items.map((item) =>
          item.children && item.children.length > 0 ? (

            <button
              key={item.label}
              onMouseEnter={() => setActive(item.label)}
              className={`px-4 py-2 text-left text-sm font-semibold uppercase hover:text-red-400 ${
                active === item.label ? "text-red-400" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ) : (

            <Link
              key={item.label}
              to={item.path!}
              className="px-4 py-2 text-left text-sm font-semibold uppercase !text-white hover:!text-gray-300"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* Right side - only show if active item has children */}
      {showRightPanel && (
        <div className="flex-1 p-2">
          {activeItem!.children!.map((nested) => (
            <Link
              key={nested.label}
              to={nested.path!}
              className="block px-3 py-1 text-[18px] !text-white hover:!text-gray-300"
            >
              {nested.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.path ? (
        <Link
          to={item.path}
          className="px-4 py-2 text-sm font-bold uppercase !text-white hover:!text-gray-300 block"
        >
          {item.label}
        </Link>
      ) : (
        <button className="px-4 py-2 text-sm font-bold uppercase hover:!text-gray-300">
          {item.label} ▼
        </button>
      )}

      {hasChildren && open && <Submenu items={item.children!} />}
    </div>
  );
};

// Main Navbar component
export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        {/* Left side - Logo / Name */}
        <Link
          to="/"
          className="text-lg font-bold tracking-wider uppercase !text-white"
        >
          Operation Holiday
        </Link>

        {/* Right side - Menu items */}
        <nav className="flex space-x-4">
          {menuItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        <div>
          <button className="py-1.5 px-3 mr-5 bg-red-700 hover:bg-red-800 rounded-md font-bold">
            Sign up
          </button>

          <button className="py-1.5 px-3 bg-green-700 hover:bg-green-800 rounded-md font-bold">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
}
