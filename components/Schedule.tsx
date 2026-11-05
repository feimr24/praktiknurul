import { CalendarDays, Clock, WhatsApp } from "./Icons";

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge-ic badge-ic-white">{children}</span>;
}

export default function Schedule() {
  return (
    <section className="schedule" id="jam-praktik">
      <div className="container">
        <div className="panel">
          <span className="ring ring-1" aria-hidden="true" />
          <span className="ring ring-2" aria-hidden="true" />

          <div className="panel-head">
            <span className="eyebrow eyebrow-lime">JAM PRAKTIK</span>
            <h2>Rencanakan kunjungan Anda.</h2>
            <p>Pilih hari dan jam yang sesuai untuk Anda.</p>
          </div>

          <div className="day-cards">
            <article className="day-card tone-1">
              <div className="day-head">
                <Badge>
                  <Clock size={20} stroke={1.33} />
                </Badge>
                <div>
                  <strong>Senin, Selasa, Sabtu</strong>
                  <span>Mulai pagi</span>
                </div>
              </div>
              <p className="day-time">
                08.00–16.00 <small>WIB</small>
              </p>
            </article>

            <article className="day-card tone-2">
              <div className="day-head">
                <Badge>
                  <Clock size={20} stroke={1.33} />
                </Badge>
                <div>
                  <strong>Rabu, Kamis, Jumat</strong>
                  <span>Mulai siang</span>
                </div>
              </div>
              <p className="day-time">
                14.00–16.00 <small>WIB</small>
              </p>
            </article>

            <article className="day-card tone-3">
              <div className="day-head">
                <Badge>
                  <CalendarDays size={20} stroke={1.33} />
                </Badge>
                <div>
                  <strong>Minggu</strong>
                  <span>By appointment</span>
                </div>
              </div>
              <p className="day-time">Buat Janji</p>
            </article>
          </div>

          <div className="panel-foot">
            <p>Konfirmasi jadwal sebelum datang melalui WhatsApp.</p>
            <a
              href="https://wa.me/6285199787307"
              target="_blank"
              rel="noreferrer"
              className="pill pill-lime"
            >
              <span className="pill-circle pill-circle-green">
                <WhatsApp size={18} />
              </span>
              Hubungi praktik
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
