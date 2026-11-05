import './fonts.css';
import './globals.css';
import './figma.css';
export const metadata = {
  title: 'Praktik dr. Nurul Ilmi Rahmatullah | Gandus, Palembang',
  description: 'Konsultasi dan pemeriksaan kesehatan dewasa dan anak bersama dr. Nurul Ilmi Rahmatullah. Lihat layanan, jam praktik, dan lokasi di Gandus, Palembang.',
};
export const viewport = { width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
