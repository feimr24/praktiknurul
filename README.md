# Praktik dr. Nurul — Next.js

Implementasi landing page dari frame Figma `01 / Landing page • Desktop` (1440 px) dan `02 / Landing page • Mobile` (390 px).

## Menjalankan

Memerlukan Node.js 20.9 atau lebih baru.

```sh
npm ci
npm run dev
```

Buka http://localhost:4173.

```sh
npm run build
```

Build menghasilkan situs statis siap hosting di folder `out/`. Seluruh font, foto, ilustrasi, mask siluet, logo, dan SVG sudah disimpan secara lokal. Tidak memerlukan token Figma, backend, atau variabel environment.

## Struktur

- `app/desktop.jsx` — komposisi desktop dari Figma.
- `app/mobile.jsx` — komposisi mobile dari Figma.
- `app/figma.css` — hasil penerjemahan ukuran, jarak, warna, gradient, dan tipografi Figma menjadi CSS biasa. Tidak memakai Tailwind.
- `app/globals.css` — reset, tautan fokus, tombol, breakpoint, dan penyesuaian viewport.
- `app/fonts.css` — font lokal Plus Jakarta Sans dan Newsreader.
- `public/assets/` — aset asli yang diunduh dari Figma.

Dua komposisi dipertahankan karena urutan kartu dan posisi foto berbeda. Breakpoint mobile adalah 767 px. Di antara ukuran referensi, komposisi mengikuti lebar viewport secara proporsional menggunakan CSS `zoom`. Pada layar lebih besar dari 1440 px, konten berada di tengah dengan lebar maksimum 1440 px. Gunakan browser modern yang mendukung aritmetika CSS bertipe untuk perilaku skala ini.

Tautan navigasi, WhatsApp, Google Maps, dan kembali ke atas sudah dihubungkan. Alamat tujuan mengikuti desain Figma; Google Maps memakai pencarian alamat, bukan koordinat pin yang belum diberikan.

## Validasi

Build produksi berhasil. Aset lokal dan target anchor diperiksa otomatis. Kesamaan visual 100% belum dinyatakan: browser pratinjau menolak akses saat pemeriksaan, sehingga perbandingan screenshot desktop/mobile dan uji klik browser belum dapat diselesaikan. Lihat `design-qa.md`.

Sumber desain: https://www.figma.com/design/2HloliZCiuYjcVB3euGFj8/Untitled?node-id=6-37
