import { ArrowUpRight, MapPin } from "./Icons";

/** Placeholder foto depan praktik. */
function StorefrontArt() {
  return (
    <svg
      viewBox="0 0 490 466"
      className="storefront-art"
      role="img"
      aria-label="Foto depan lokasi praktik"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="490" height="466" fill="#E9F0EA" />
      {/* langkan / dinding atas */}
      <rect x="0" y="0" width="490" height="150" fill="#DFE9E1" />
      <rect x="90" y="42" width="310" height="58" rx="8" fill="#F5F8F4" stroke="#CFE0D2" strokeWidth="3" />
      {/* etalase kaca */}
      <rect x="26" y="150" width="438" height="256" fill="#B9DACD" />
      <g stroke="#EAF2EC" strokeWidth="7">
        <path d="M128 150v256M230 150v256M332 150v256" />
      </g>
      {/* pintu double */}
      <rect x="132" y="176" width="100" height="230" fill="#A6CFC0" stroke="#EAF2EC" strokeWidth="7" />
      <rect x="234" y="176" width="100" height="230" fill="#A6CFC0" stroke="#EAF2EC" strokeWidth="7" />
      <rect x="216" y="286" width="8" height="34" rx="4" fill="#5E8779" />
      <rect x="244" y="286" width="8" height="34" rx="4" fill="#5E8779" />
      {/* lantai */}
      <rect x="0" y="406" width="490" height="60" fill="#D3DED3" />
      {/* tanaman */}
      <g>
        <rect x="410" y="330" width="34" height="44" rx="8" fill="#8C6F54" />
        <path d="M427 336c-26-30-14-64 0-78 14 14 26 48 0 78Z" fill="#4E8C5F" />
        <path d="M427 348c-30-8-50-38-46-60 24 6 46 30 46 60Z" fill="#5FA06B" />
      </g>
      <g>
        <rect x="34" y="352" width="26" height="34" rx="6" fill="#8C6F54" />
        <path d="M47 356c-20-24-12-50 0-62 12 12 20 38 0 62Z" fill="#5FA06B" />
      </g>
    </svg>
  );
}

export default function Location() {
  return (
    <section className="location" id="lokasi">
      <div className="container">
        <div className="section-head section-head-left">
          <span className="eyebrow">LOKASI PRAKTIK</span>
          <h2>Sampai jumpa di Lokasi Praktik.</h2>
        </div>

        <div className="loc-grid">
          {/* Kartu alamat */}
          <div className="addr-card">
            <span className="badge-ic badge-ic-white badge-ic-lg">
              <MapPin size={23} stroke={1.53} />
            </span>
            <h3>Jl. Tri Darma Suak Bujang</h3>
            <p className="addr">
              RT03/RW2, Kel. Gandus, Kec. Gandus,
              <br />
              Kota Palembang, Sumatera Selatan
            </p>

            <div className="patokan">
              <span className="badge-ic badge-ic-green badge-ic-sm">
                <MapPin size={17} stroke={1.13} />
              </span>
              <div>
                <small>PATOKAN</small>
                <strong>Ruko camping Ar–Rahman Residence</strong>
              </div>
            </div>

            <div className="addr-actions">
              <a
                href="https://maps.google.com/?q=Ar-Rahman+Residence+Gandus+Palembang"
                target="_blank"
                rel="noreferrer"
                className="pill pill-dark"
              >
                <span className="pill-circle">
                  <ArrowUpRight size={18} stroke={1.6} />
                </span>
                Cari di Google Maps
              </a>
            </div>
          </div>

          {/* Foto depan praktik */}
          <div className="loc-photo">
            <StorefrontArt />
          </div>
        </div>
      </div>
    </section>
  );
}
