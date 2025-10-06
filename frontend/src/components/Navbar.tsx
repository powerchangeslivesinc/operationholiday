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
          { label: "Partner Registration", path: "/programs/santasvillage/partners" },
          { label: "Vendor Registration", path: "/programs/santasvillage/vendors" },
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

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {hasChildren ? (
        <button
          className="px-4 py-2 text-sm font-bold uppercase hover:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {item.label} ▼
        </button>
      ) : (
        <Link
          to={item.path!}
          className="px-4 py-2 text-sm font-bold uppercase hover:text-gray-300 block"
        >
          {item.label}
        </Link>
      )}

      {hasChildren && open && (
        <div className="absolute left-0 top-full bg-gray-900 text-white min-w-[200px] rounded shadow-lg z-50">
          {item.children!.map((child) => (
            <NavItem key={child.label} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Navbar component
export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left side - Logo / Name */}
        <Link to="/" className="text-lg font-bold tracking-wider uppercase">
          Operation Holiday
        </Link>

        {/* Right side - Menu items */}
        <nav className="flex space-x-4">
          {menuItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
