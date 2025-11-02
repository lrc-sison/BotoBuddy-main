import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/voting", label: "Voting Page" },
    { to: "/candidates", label: "Candidate Profiles" },
    { to: "/test", label: "Alignment Test" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Meet the Team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-primary">
          BotoBuddy
        </NavLink>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="sm:hidden p-2 rounded-md border border-transparent hover:border-border"
          aria-label="Toggle navigation"
        >
          {/* simple hamburger */}
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>

        <ul className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to + item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-border">
          <ul className="flex flex-col p-3 gap-2">
            {navItems.map((item) => (
              <li key={item.to + item.label + "-mobile"}>
                <NavLink
                  to={item.to}
                  className="block py-2 px-3 rounded hover:bg-muted/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;