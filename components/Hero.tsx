import { ClipboardCheck, Clock, MapPin, Stethoscope, WhatsApp } from "./Icons";

/** Placeholder untuk foto dr. Nurul Ilmi Rahmatullah (siluet). */
function DoctorArt() {
  return (
    <svg
      viewBox="0 0 670 670"
      className="doctor-art"
      role="img"
      aria-label="Foto dr. Nurul Ilmi Rahmatullah"
    >
      {/* blouse */}
      <path d="M95 670c8-108 122-172 240-172s232 64 240 172Z" fill="#F7F4EE" />
      {/* hijab outer */}
      <path
        d="M335 96c-104 0-146 84-146 190 0 78 26 146 56 190 40 58 150 58 186-4 30-52 50-112 50-186 0-106-42-190-146-190Z"
        fill="#CDA07A"
      />
      {/* hijab folds */}
      <path
        d="M335 96c-62 0-100 42-118 104 26-38 66-58 118-58s92 20 118 58c-18-62-56-104-118-104Z"
        fill="#B98D66"
        opacity=".55"
      />
      {/* face */}
      <ellipse cx="335" cy="286" rx="80" ry="94" fill="#EFC3A8" />
      {/* glasses */}
      <g stroke="#6E4F3B" strokeWidth="5" fill="none">
        <circle cx="302" cy="292" r="27" />
        <circle cx="368" cy="292" r="27" />
        <path d="M329 292h12" />
      </g>
      {/* mouth */}
      <path d="M318 348q17 12 34 0" stroke="#C98B6F" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* stethoscope */}
      <path
        d="M238 470c-40 36-52 120-38 200"
        stroke="#C16068"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M432 460c50 30 70 96 58 160"
        stroke="#C16068"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="490" cy="640" r="20" fill="#F3F0EA" stroke="#C16068" strokeWidth="10" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-in">
        <div className="hero-text">
          <span className="eyebrow-badge">PRAKTIK DOKTER UMUM</span>

          <h1>
            Perawatan untuk
            <br />
            keluarga Anda,
            <br />
            <em className="accent">lebih dekat.</em>
          </h1>

          <p className="hero-lead">
            Konsultasi dan pemeriksaan kesehatan bersama dr. Nurul Ilmi
            Rahmatullah di Gandus, Palembang.
          </p>

          <div className="cta-row">
            <a
              href="https://wa.me/6285199787307"
              target="_blank"
              rel="noreferrer"
              className="pill pill-dark"
            >
              <span className="pill-circle">
                <WhatsApp size={18} />
              </span>
              Tanya via WhatsApp
            </a>
            <a href="#jam-praktik" className="pill pill-light">
              <span className="pill-circle pill-circle-green">
                <Clock size={18} stroke={1.6} />
              </span>
              Lihat jam praktik
            </a>
          </div>

          <span className="divider" aria-hidden="true" />

          <div className="hero-meta">
            <div className="meta-item">
              <span className="badge-ic badge-ic-white">
                <Stethoscope size={20} stroke={1.33} />
              </span>
              <div>
                <strong>Dewasa &amp; anak</strong>
                <span>Konsultasi dokter umum</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="badge-ic badge-ic-white">
                <MapPin size={20} stroke={1.33} />
              </span>
              <div>
                <strong>Gandus, Palembang</strong>
                <span>Jl. Tri Darma Suak Bujang</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <span className="halo-ring" />
          <span className="halo" />
          <DoctorArt />
          <div className="float-card">
            <span className="badge-ic badge-ic-green">
              <ClipboardCheck size={21} stroke={1.4} />
            </span>
            <div>
              <strong>dr. Nurul Ilmi Rahmatullah</strong>
              <span>Dokter umum • Praktik mandiri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
