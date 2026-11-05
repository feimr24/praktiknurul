import Link from "next/link";
import { ArrowUpRight, LogoMark, Mail, Phone } from "./Icons";

const LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Jam praktik", href: "#jam-praktik" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <span className="ring ring-1" aria-hidden="true" />
      <span className="ring ring-2" aria-hidden="true" />

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo logo-invert">
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
            <p>
              Praktik dokter umum di Gandus, Palembang.
              <br />
              Konsultasi untuk dewasa dan anak.
            </p>
          </div>

          <nav className="footer-col" aria-label="Jelajahi">
            <h4>JELAJAHI</h4>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-col" aria-label="Kontak praktik">
            <h4>KONTAK PRAKTIK</h4>
            <a href="tel:+6285199787307" className="contact-row">
              <Phone size={17} />
              0851 9978 7307
            </a>
            <a href="mailto:pmdr.nurulilmi@gmail.com" className="contact-row">
              <Mail size={17} />
              pmdr.nurulilmi@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Praktik dr. Nurul.</p>
          <Link href="#beranda" className="back-top">
            Kembali ke atas <ArrowUpRight size={15} stroke={1.3} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
