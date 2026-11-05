import { Desktop } from './desktop';
import { Mobile } from './mobile';

export default function Home() {
  return <>
    <a className="skip-link" href="#content">Langsung ke konten</a>
    <main id="content" aria-label="Praktik dr. Nurul Ilmi Rahmatullah">
      <div className="design-view desktop-view"><Desktop /></div>
      <div className="design-view mobile-view"><Mobile /></div>
    </main>
  </>;
}
