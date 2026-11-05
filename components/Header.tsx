"use client";

import { useState } from "react";
import { LogoMark } from "./Icons";

const NAV = [
  { label: "Layanan", href: "#layanan" },
  { label: "Jam praktik", href: "#jam-praktik" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-in">
        <a href="#" className="logo" aria-label="Beranda — Praktik dr. Nurul Ilmi Rahmatullah">
          <LogoMark size={46} />
          <span className="logo-text">
            <strong>
              dr. Nurul Ilmi
              <br />
              Rahmatullah
            </strong>
            <small>PRAKTIK DOKTER UMUM</small>
          </span>
        </a>

        <nav className="nav" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="https://wa.me/6285199787307"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Hubungi kami
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285199787307"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Hubungi kami
          </a>
        </div>
      )}
    </header>
  );
}
