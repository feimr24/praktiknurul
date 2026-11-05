import { ArrowUpRight, Bandage, Ear, Scissors, Syringe, WhatsApp, Wind } from "./Icons";

/** Placeholder ilustrasi stetoskop + balon percakapan. */
function ServiceArt() {
  return (
    <svg viewBox="0 0 233 233" className="service-art" aria-hidden>
      {/* balon percakapan */}
      <g>
        <rect x="72" y="18" width="118" height="78" rx="18" fill="#FDFEFB" />
        <path d="M108 94l-8 22 28-22Z" fill="#FDFEFB" />
        <rect x="118" y="52" width="28" height="9" rx="4.5" fill="#39A96F" />
        <rect x="127.5" y="42.5" width="9" height="28" rx="4.5" fill="#39A96F" />
      </g>
      {/* stetoskop */}
      <path
        d="M64 34c-30 46-36 112 6 146 26 21 76 26 106 4 20-15 22-36 12-48"
        stroke="#14574A"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M64 34c-8-9-24-9-32-1" stroke="#14574A" strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="182" cy="130" r="19" fill="#F3F9EF" stroke="#14574A" strokeWidth="9" />
    </svg>
  );
}

const SERVICES = [
  { icon: <Bandage size={22} stroke={1.46} />, title: "Perawatan luka", desc: "Pembersihan dan perawatan luka serta kontrol penyembuhan." },
  { icon: <Scissors size={22} stroke={1.46} />, title: "Tindakan minor", desc: "Jahitan luka kecil, penanganan abse s, serta kuku berjangka." },
  { icon: <Ear size={22} stroke={1.46} />, title: "Irigasi telinga", desc: "Pemeriksaan dan pembersihan telinga sesuai indikasi." },
  { icon: <Wind size={22} stroke={1.46} />, title: "Terapi nebulizer", desc: "Terapi inhalasi setelah pemeriksaan oleh dokter." },
  { icon: <Syringe size={22} stroke={1.46} />, title: "Layanan suntik", desc: "Obat dan vitamin sesuai kebutuhan serta indikasi medis." },
];

export default function Services() {
  return (
    <section className="services" id="layanan">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">LAYANAN PRAKTIK</span>
          <h2>Perawatan untuk setiap kebutuhan.</h2>
          <p>Dari pemeriksaan rutin hingga tindakan medis sesuai indikasi.</p>
        </div>

        <div className="bento">
          {/* Kolom kiri */}
          <div className="bento-col">
            <article className="card">
              <span className="badge-ic badge-ic-mint">{SERVICES[0].icon}</span>
              <h3>{SERVICES[0].title}</h3>
              <p>{SERVICES[0].desc}</p>
            </article>
            <article className="card">
              <span className="badge-ic badge-ic-mint">{SERVICES[1].icon}</span>
              <h3>{SERVICES[1].title}</h3>
              <p>{SERVICES[1].desc}</p>
            </article>
          </div>

          {/* Kartu utama (tengah) */}
          <div className="bento-col">
            <article className="cta-card">
              <span className="tag">LAYANAN UTAMA</span>
              <h3>Konsultasi umum</h3>
              <p>Pemeriksaan dan pengobatan untuk dewasa serta anak.</p>
              <ServiceArt />
              <a
                href="https://wa.me/6285199787307"
                target="_blank"
                rel="noreferrer"
                className="pill pill-dark pill-sm"
              >
                <span className="pill-circle pill-circle-sm">
                  <WhatsApp size={17} />
                </span>
                Tanya konsultasi
              </a>
            </article>
            <article className="card">
              <span className="badge-ic badge-ic-mint">{SERVICES[2].icon}</span>
              <h3>{SERVICES[2].title}</h3>
              <p>{SERVICES[2].desc}</p>
            </article>
          </div>

          {/* Kolom kanan */}
          <div className="bento-col">
            <article className="card">
              <span className="badge-ic badge-ic-mint">{SERVICES[3].icon}</span>
              <h3>{SERVICES[3].title}</h3>
              <p>{SERVICES[3].desc}</p>
            </article>
            <article className="card">
              <span className="badge-ic badge-ic-mint">{SERVICES[4].icon}</span>
              <h3>{SERVICES[4].title}</h3>
              <p>{SERVICES[4].desc}</p>
            </article>
          </div>
        </div>

        <div className="services-cta">
          <a
            href="https://wa.me/6285199787307"
            target="_blank"
            rel="noreferrer"
            className="pill pill-dark"
          >
            <span className="pill-circle">
              <ArrowUpRight size={18} stroke={1.6} />
            </span>
            Tanyakan layanan
          </a>
          <p className="note">Tindakan dilakukan sesuai hasil pemeriksaan dan indikasi medis.</p>
        </div>
      </div>
    </section>
  );
}
