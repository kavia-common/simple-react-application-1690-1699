import React from "react";

/**
 * PUBLIC_INTERFACE
 * Header
 * A minimal site header with navigation links to switch between demo screens.
 *
 * Props:
 * - currentScreen: one of "regular" | "double" | "range"
 * - onNavigate: function(screenId: string) => void
 */
function Header({ currentScreen, onNavigate }) {
  const links = [
    { id: "regular", label: "Regular" },
    { id: "double", label: "Double-view" },
    { id: "range", label: "Date range" },
  ];

  return (
    <header className="site-header" role="banner" aria-label="App Header">
      <div className="site-header__inner">
        <div className="brand" aria-label="Application name">
          Calendar UI
        </div>
        <nav className="site-nav" aria-label="Primary">
          <ul className="nav-list">
            {links.map((l) => (
              <li key={l.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${currentScreen === l.id ? "active" : ""}`}
                  onClick={() => onNavigate(l.id)}
                  aria-current={currentScreen === l.id ? "page" : undefined}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
