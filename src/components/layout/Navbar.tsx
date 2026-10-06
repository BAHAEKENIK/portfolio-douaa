import { useEffect, useState } from "react";

import { navItems, siteName } from "../../data/navigation";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useScrolled } from "../../hooks/useScrolled";
import { Container } from "./Container";

export function Navbar() {
  const scrolled = useScrolled(8);
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Close if user resizes past the mobile breakpoint
  useEffect(() => {
    if (!menuOpen) return;

    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <Container className="navbar__inner">
          <a href="#home" className="navbar__brand" onClick={closeMenu}>
            {siteName}
          </a>

          <nav aria-label="Primary" className="navbar__nav">
            <ul className="navbar__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a className="navbar__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="navbar__toggle-line" aria-hidden="true" />
            <span className="navbar__toggle-line" aria-hidden="true" />
          </button>
        </Container>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                style={{
                  transitionDelay: menuOpen ? `${60 + index * 40}ms` : "0ms",
                }}
              >
                <a
                  className="mobile-menu__link"
                  href={item.href}
                  onClick={closeMenu}
                >
                  <span className="mobile-menu__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mobile-menu__label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}