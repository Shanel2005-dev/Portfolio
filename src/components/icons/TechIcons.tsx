type IconProps = { size?: number; className?: string };

export function ReactLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11 -9.5 22 19" className={className}>
      <circle r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.2" />
        <ellipse rx="10" ry="4.2" transform="rotate(60)" />
        <ellipse rx="10" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JsLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="#000">
        JS
      </text>
    </svg>
  );
}

export function TsLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">
        TS
      </text>
    </svg>
  );
}

export function Html5Logo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#E34F26">
      <path d="M3 2l1.7 18.9L12 23l7.3-2.1L21 2H3zm14.6 5.6H8.3l.2 2.6h8.9l-.7 7.6-4.7 1.4v0l-4.7-1.4-.3-3.4h2.6l.2 1.6 2.2.6 2.2-.6.2-2.9H6.9l-.6-6.9h11.5l-.2 2.4z" />
    </svg>
  );
}

export function Css3Logo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1572B6">
      <path d="M3 2l1.7 18.9L12 23l7.3-2.1L21 2H3zm14.1 5.6H8.1l.2 2.4h8.6l-.6 6.6-4.3 1.3-4.3-1.3-.3-3.1h2.4l.1 1.5 2.1.6 2.1-.6.2-2.7H6.9l-.6-6.9h11.1l-.3 2.2z" />
    </svg>
  );
}

export function TailwindLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#38BDF8">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z" />
    </svg>
  );
}

export function NodeLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#83CD29">
      <path d="M12 1.5 2 7v10l10 5.5L22 17V7L12 1.5zm0 2.3 7.8 4.3v8.8L12 21.2l-7.8-4.3V8.1L12 3.8z" />
      <circle cx="12" cy="12" r="4" fill="#83CD29" />
    </svg>
  );
}

export function FigmaLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M9 2h4.5a3 3 0 010 6H9V2z" fill="#F24E1E" />
      <path d="M4.5 5a3 3 0 013-3H9v6H7.5a3 3 0 01-3-3z" fill="#FF7262" />
      <path d="M4.5 12a3 3 0 013-3H9v6H7.5a3 3 0 01-3-3z" fill="#A259FF" />
      <path d="M9 14.5h3a3 3 0 110 6h-.5a2.5 2.5 0 01-2.5-2.5v-3.5z" fill="#1ABCFE" />
      <circle cx="13.5" cy="12" r="3" fill="#0ACF83" />
    </svg>
  );
}

export function DjangoLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#0C4B33" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="Georgia, serif" fill="#44B78B">
        Dj
      </text>
    </svg>
  );
}

export function PostgresLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#336791" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">
        Pg
      </text>
    </svg>
  );
}

export function FlutterLogo({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#02569B">
      <path d="M14.3 2 4.2 12.1l3.5 3.5L21.5 2H14.3zM14.3 14.6l-3.5 3.5 3.5 3.5H21.5l-7-7z" />
      <path d="M10.7 15.6 4.2 22h7.1l3.5-3.5-4.1-2.9z" fill="#02569B" opacity="0.6" />
    </svg>
  );
}
