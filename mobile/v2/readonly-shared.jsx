// readonly-shared.jsx — tokens, icons, primitives for the web triage detail panel.
// Matches Fendrel mobile design system (Inter, Navy #0F2B46, Orange #F97316).

const FT = {
  navy: '#0F2B46', navyMid: '#163A5C', navy900: '#0a1d31',
  orange: '#F97316', orangeHover: '#EA6C0E', orangeDark: '#C2410C',
  orange50: '#FFF7ED', orange100: '#FFEDD5', orange200: '#FED7AA', orange300: '#FDBA74',
  gray50: '#F9FAFB', gray100: '#F3F4F6', gray200: '#E5E7EB',
  gray300: '#D1D5DB', gray400: '#9CA3AF', gray500: '#6B7280',
  gray600: '#4B5563', gray700: '#374151', gray800: '#1F2937', gray900: '#111827',
  white: '#FFFFFF',
  success: '#16A34A', successLight: '#DCFCE7', successDark: '#15803D',
  warning: '#F59E0B', warningLight: '#FEF3C7', warningDark: '#92400E',
  error: '#DC2626', errorLight: '#FEE2E2', errorDark: '#B91C1C',
  info: '#2563EB', infoLight: '#DBEAFE',
  font: "'Inter', -apple-system, system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, 'SF Mono', monospace",
};

// ── Icons ────────────────────────────────────────────────────────────────
function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.8 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
              stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'x':           return <svg {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'check':       return <svg {...p}><path d="M5 12l5 5L20 7"/></svg>;
    case 'check-circle':return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>;
    case 'chevron':     return <svg {...p}><path d="M9 6l6 6-6 6"/></svg>;
    case 'chevron-down':return <svg {...p}><path d="M6 9l6 6 6-6"/></svg>;
    case 'chevron-up':  return <svg {...p}><path d="M6 15l6-6 6 6"/></svg>;
    case 'lock':        return <svg {...p}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
    case 'pdf':         return <svg {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6"/></svg>;
    case 'download':    return <svg {...p}><path d="M12 3v13M6 11l6 6 6-6M4 21h16"/></svg>;
    case 'more':        return <svg {...p}><circle cx="6" cy="12" r="1.5" fill={color} stroke="none"/><circle cx="12" cy="12" r="1.5" fill={color} stroke="none"/><circle cx="18" cy="12" r="1.5" fill={color} stroke="none"/></svg>;
    case 'expand':      return <svg {...p}><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/></svg>;
    case 'comment':     return <svg {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.6-4.5A8 8 0 1 1 21 12Z"/></svg>;
    case 'paperclip':   return <svg {...p}><path d="M21.5 11.5L12 21a6 6 0 0 1-8.5-8.5L13 3a4 4 0 0 1 5.7 5.7L9 18.5a2 2 0 0 1-2.8-2.8L14 8"/></svg>;
    case 'send':        return <svg {...p}><path d="M3 11l18-8-8 18-2-8-8-2z"/></svg>;
    case 'camera':      return <svg {...p}><path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"/><circle cx="12" cy="13" r="3.5"/></svg>;
    case 'image':       return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>;
    case 'scale':       return <svg {...p}><path d="M3 7h18M8 7l-3 9a4 4 0 0 0 8 0L10 7M16 7l-3 9a4 4 0 0 0 8 0L18 7M12 3v18"/></svg>;
    case 'truck':       return <svg {...p}><path d="M3 17V7h11v10M14 11h4l3 4v2h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
    case 'pin':         return <svg {...p}><path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'clock':       return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'play':        return <svg {...p}><path d="M7 5l12 7-12 7V5z"/></svg>;
    case 'manager':     return <svg {...p}><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><circle cx="10" cy="8" r="3.5"/><path d="M17 4l2 2 3-3"/></svg>;
    case 'user':        return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>;
    case 'rotate':      return <svg {...p}><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 21v-6h6"/></svg>;
    case 'shield':      return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z"/></svg>;
    case 'warning':     return <svg {...p}><path d="M12 3l10 18H2L12 3Z"/><path d="M12 10v5M12 18v.5"/></svg>;
    case 'info':        return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.5"/></svg>;
    case 'plus':        return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'filter':      return <svg {...p}><path d="M3 5h18l-7 9v6l-4-2v-4L3 5z"/></svg>;
    case 'search':      return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg>;
    case 'refresh':     return <svg {...p}><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5"/></svg>;
    case 'cog':         return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>;
    case 'menu':        return <svg {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case 'unlock':      return <svg {...p}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 7-2"/></svg>;
    case 'dashboard':   return <svg {...p}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
    case 'flow':        return <svg {...p}><path d="M3 8h13M16 4l4 4-4 4"/><path d="M21 16H8M8 20l-4-4 4-4"/></svg>;
    case 'projects':    return <svg {...p}><path d="M3 7h6l2 3h10v9a2 2 0 0 1-2 2H3V7Z"/></svg>;
    case 'tools':       return <svg {...p}><path d="M14 6l-4 4 4 4 4-4-4-4Z"/><path d="M10 10L4 16v4h4l6-6"/></svg>;
    case 'docs':        return <svg {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M9 14h6M9 17h6"/></svg>;
    case 'flash':       return <svg {...p}><path d="M13 3L4 14h6l-1 7 9-11h-6l1-7Z"/></svg>;
    case 'mast':        return <svg {...p}><path d="M6 3v18M10 3v18M14 7h6M14 13h6M14 19h6"/><path d="M4 21h6"/></svg>;
    case 'wheel':       return <svg {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>;
    case 'drop':        return <svg {...p}><path d="M12 3c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11Z"/></svg>;
    case 'signature':   return <svg {...p}><path d="M3 17c2-1 3-4 5-4s2 4 4 4 3-4 5-4 2 2 4 2"/><path d="M3 21h18"/></svg>;
    case 'siren':       return <svg {...p}><path d="M5 19v-7a7 7 0 0 1 14 0v7"/><path d="M3 19h18"/><path d="M12 5V2"/></svg>;
    case 'pen':         return <svg {...p}><path d="M14 4l6 6-11 11H3v-6L14 4Z"/></svg>;
    case 'forklift':    return <svg {...p}><path d="M3 17h11"/><circle cx="6" cy="19" r="2"/><circle cx="13" cy="19" r="2"/><path d="M14 17V9h4l3 4v4h-3"/><path d="M14 9l-3-4H6v8"/><path d="M20 17v-7M20 11h-6"/></svg>;
    case 'calendar':    return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'scan':        return <svg {...p}><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M4 12h16"/></svg>;
    case 'mic':         return <svg {...p}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>;
    case 'edit':        return <svg {...p}><path d="M4 20h4l10-10-4-4L4 16v4Z"/><path d="M13.5 6.5l4 4"/></svg>;
    case 'trash':       return <svg {...p}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>;
    case 'building':    return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></svg>;
    case 'checklist':   return <svg {...p}><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17"/></svg>;
    case 'note':        return <svg {...p}><path d="M5 4h14a1 1 0 0 1 1 1v10l-5 5H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M15 20v-4a1 1 0 0 1 1-1h4M8 9h8M8 13h5"/></svg>;
    case 'sparkles':    return <svg {...p}><path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z"/><path d="M19 14l.7 1.8 1.8.7-1.8.7L19 19l-.7-1.8-1.8-.7 1.8-.7L19 14Z"/></svg>;
    case 'wand':        return <svg {...p}><path d="M15 4V2M15 10V8M11 6H9M21 6h-2M18.4 3.6l-1.4 1.4M18.4 8.4l-1.4-1.4"/><path d="M4 20l9-9-2-2-9 9 2 2Z"/></svg>;
    case 'arrow-left':  return <svg {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>;
    case 'arrow-right': return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'eye':         return <svg {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'copy':        return <svg {...p}><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>;
    case 'rocket':      return <svg {...p}><path d="M12 3c3 1 6 4.5 6 9l-3 3H9l-3-3c0-4.5 3-8 6-9Z"/><circle cx="12" cy="9" r="1.6"/><path d="M9 15l-2 4 4-2M15 15l2 4-4-2"/></svg>;
    case 'chart':       return <svg {...p}><path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3"/></svg>;
    case 'smartphone':  return <svg {...p}><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/></svg>;
    case 'grid':        return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>;
    case 'list':        return <svg {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>;
    case 'history':     return <svg {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 8v4l3 2"/></svg>;
    case 'file':        return <svg {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6"/></svg>;
    case 'star':        return <svg {...p}><path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6L12 17l-5.4 2.6 1-6L3.3 9.4l6-.9L12 3Z"/></svg>;
    case 'book':        return <svg {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><path d="M9 7h6M9 11h6"/></svg>;
    case 'gauge':       return <svg {...p}><path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16l4-5"/><path d="M4 16h2M18 16h2M12 8V6"/></svg>;
    case 'battery':     return <svg {...p}><rect x="3" y="8" width="16" height="9" rx="2"/><path d="M21 11v3"/><path d="M7 11v3M10.5 11v3M14 11v3"/></svg>;
    case 'wrench':      return <svg {...p}><path d="M15 6a4 4 0 0 0-5.3 4.7L4 16.4 7.6 20l5.7-5.7A4 4 0 0 0 18 9l-2.5 2.5L13 10l-1.5-2.5L14 5"/></svg>;
    case 'certificate': return <svg {...p}><rect x="4" y="3" width="16" height="14" rx="2"/><circle cx="12" cy="9" r="3"/><path d="M9.5 14l-1 6 3.5-2 3.5 2-1-6"/></svg>;
    case 'arrow-up':    return <svg {...p}><path d="M12 19V5M6 11l6-6 6 6"/></svg>;
    case 'arrow-down':  return <svg {...p}><path d="M12 5v14M6 13l6 6 6-6"/></svg>;
    case 'clipboard':   return <svg {...p}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h4"/></svg>;
    case 'gear-cal':    return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><circle cx="12" cy="15" r="2.2"/></svg>;
    case 'mail':        return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'key':         return <svg {...p}><circle cx="8" cy="14" r="4"/><path d="M11 11l9-9M17 5l2 2M14 8l2 2"/></svg>;
    case 'phone':       return <svg {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>;
    case 'globe':       return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>;
    case 'user-plus':   return <svg {...p}><circle cx="9" cy="8" r="4"/><path d="M2 21c1.3-3.5 4-5 7-5s5.7 1.5 7 5"/><path d="M19 8v6M16 11h6"/></svg>;
    case 'ban':         return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>;
    case 'shield-check':return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z"/><path d="M9 12l2 2 4-4"/></svg>;
    case 'crown':       return <svg {...p}><path d="M3 8l4 4 5-7 5 7 4-4v9H3V8Z"/></svg>;
    default:            return <svg {...p}><circle cx="12" cy="12" r="8"/></svg>;
  }
}

// ── Avatar (initials over color) ─────────────────────────────────────────
function Avatar({ name, color, size = 28, ring }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, flexShrink: 0,
      background: color || FT.gray400, color: '#fff',
      fontSize: size * 0.4, fontWeight: 700,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: FT.font,
      boxShadow: ring ? `0 0 0 2px ${FT.white}, 0 0 0 4px ${ring}` : 'none',
    }}>{initials}</div>
  );
}

// ── Status badge (chips: open / in-progress / blocked / done) ────────────
function StatusBadge({ status, big }) {
  const map = {
    open:        { label: 'Offen',          bg: FT.warningLight, fg: FT.warningDark, dot: FT.warning },
    progress:    { label: 'In Bearbeitung', bg: FT.infoLight,    fg: '#1D4ED8',      dot: FT.info },
    blocked:     { label: 'Blockiert',      bg: FT.errorLight,   fg: FT.errorDark,   dot: FT.error },
    done:        { label: 'Abgeschlossen',  bg: FT.successLight, fg: FT.successDark, dot: FT.success },
  };
  const s = map[status] || map.done;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: big ? '5px 12px' : '3px 10px', borderRadius: 999,
      background: s.bg, color: s.fg,
      fontSize: big ? 12 : 11, fontWeight: 700,
      fontFamily: FT.font,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: s.dot }}/>
      {s.label}
    </div>
  );
}

// ── Project/category chip (matches the cards on the kanban) ──────────────
function ProjectChip({ label, tone = 'navy' }) {
  const palettes = {
    navy:    { bg: '#E6EAF1', fg: FT.navy },
    purple:  { bg: '#EDE4F8', fg: '#5B21B6' },
    amber:   { bg: '#FEF3C7', fg: '#92400E' },
    teal:    { bg: '#CCFBF1', fg: '#0F766E' },
  };
  const p = palettes[tone] || palettes.navy;
  return (
    <span style={{
      padding: '2px 9px', borderRadius: 999,
      background: p.bg, color: p.fg,
      fontSize: 11, fontWeight: 600, fontFamily: FT.font,
      whiteSpace: 'nowrap',
    }}>{label}</span>
  );
}

// ── ManagerBadge (matches Fendrel mobile primitive exactly) ──────────────
function ManagerBadge({ size = 'sm', name }) {
  const big = size === 'md';
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: big ? '4px 10px' : '2px 8px', borderRadius: 999,
      background: FT.orange50, border: `1px solid ${FT.orange200}`,
      color: FT.orangeDark, fontSize: big ? 12 : 11, fontWeight: 700,
      fontFamily: FT.font, whiteSpace: 'nowrap',
    }}>
      <Icon name="manager" size={big ? 12 : 10} color={FT.orangeDark} strokeWidth={2.4}/>
      {big && name ? `Vom Bereichsleiter · ${name}` : 'Vom Bereichsleiter'}
    </div>
  );
}

// ── Section heading ──────────────────────────────────────────────────────
function SectionHeading({ children, count, right, hint }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 8,
      marginBottom: 10, fontFamily: FT.font,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: FT.gray600,
        textTransform: 'uppercase', letterSpacing: 0.7,
      }}>
        {children}
        {typeof count === 'number' ? <span style={{ color: FT.gray400, marginLeft: 6 }}>· {count}</span> : null}
      </div>
      {hint ? <div style={{ fontSize: 11, color: FT.gray400 }}>{hint}</div> : null}
      {right ? <div style={{ marginLeft: 'auto' }}>{right}</div> : null}
    </div>
  );
}

// ── Generic "card surface" wrapper ───────────────────────────────────────
function Card({ children, pad = true, style }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 10,
      border: `1px solid ${FT.gray200}`,
      boxShadow: '0 1px 2px rgba(15,43,70,0.04)',
      padding: pad ? 14 : 0,
      fontFamily: FT.font,
      ...style,
    }}>{children}</div>
  );
}

// ── Key/value row used in Details sidebar ────────────────────────────────
function KV({ label, children, icon }) {
  return (
    <div style={{
      display: 'flex', gap: 12, padding: '7px 0',
      borderTop: `1px solid ${FT.gray100}`, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 120, flexShrink: 0,
        fontSize: 11.5, color: FT.gray500, fontWeight: 600,
        display: 'flex', alignItems: 'center', gap: 6, paddingTop: 1,
      }}>
        {icon ? <Icon name={icon} size={13} color={FT.gray400}/> : null}
        {label}
      </div>
      <div style={{ flex: 1, fontSize: 13, color: FT.navy, fontWeight: 500, lineHeight: 1.4, minWidth: 0 }}>
        {children}
      </div>
    </div>
  );
}

// ── Photo tile (filled — gradient stand-in) ──────────────────────────────
function PhotoTile({ label, time, gradient = ['#7a8a98', '#3d4b58'], aspect = '4 / 3', big }) {
  return (
    <div style={{
      borderRadius: 10, overflow: 'hidden', position: 'relative',
      background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      border: `1px solid ${FT.gray200}`,
      aspectRatio: aspect, minWidth: 0,
    }}>
      {/* decorative "photo" silhouette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `repeating-linear-gradient(
          135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 4px,
          transparent 4px, transparent 8px)`,
      }}/>
      <div style={{
        position: 'absolute', inset: 'auto 0 0 0',
        padding: big ? '8px 12px' : '6px 10px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))',
        color: '#fff', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        fontSize: big ? 12 : 11, fontWeight: 600, fontFamily: FT.font, gap: 8,
      }}>
        <span>{label}</span>
        {time ? <span style={{ opacity: 0.8, fontVariantNumeric: 'tabular-nums' }}>{time}</span> : null}
      </div>
    </div>
  );
}

Object.assign(window, { FT, Icon, Avatar, StatusBadge, ProjectChip, ManagerBadge, SectionHeading, Card, KV, PhotoTile });
