/* ---------- Icons (lucide-style, inline SVG) ---------- */

type IconProps = {
  size?: number;
  stroke?: number;
  className?: string;
};

function base(size: number, className?: string, strokeWidth = 1.3) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export const MapPin = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const CalendarDays = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

export const Stethoscope = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

export const Bandage = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <rect width="18" height="18" x="3" y="3" rx="3" transform="rotate(45 12 12)" />
    <path d="M9.2 14.8l5.6-5.6" />
    <path d="M12 12h.01" />
  </svg>
);

export const Scissors = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
  </svg>
);

export const Ear = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
    <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
  </svg>
);

export const Wind = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

export const Syringe = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5M9 11l4 4M5 19l-3 3M14 4l6 6" />
  </svg>
);

export const ClipboardCheck = ({ size = 20, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

export const ArrowUpRight = ({ size = 18, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

export const MessageCircle = ({ size = 18, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const Phone = ({ size = 18, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92" />
  </svg>
);

export const Mail = ({ size = 18, stroke = 1.3, className }: IconProps) => (
  <svg {...base(size, className, stroke)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

/** WhatsApp glyph (filled) */
export const WhatsApp = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-1.4 1.603-1.732 1.906-.34.315-.647.42-.944.259-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.77-1.653-2.173-.173-.402-.018-.588.132-.737.149-.149.34-.372.511-.557.176-.198.232-.34.347-.545.116-.198.058-.396-.03-.595-.087-.198-.666-1.606-.913-2.198-.24-.59-.483-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

/* ---------- Logo mark ---------- */

export const LogoMark = ({ size = 44, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
    <rect x="19" y="2" width="10" height="20" rx="5" fill="#3FAF6A" />
    <rect x="24" y="22" width="10" height="24" rx="5" fill="#0E6E5F" />
    <rect x="4" y="13" width="34" height="10" rx="5" fill="#0E6E5F" />
  </svg>
);
