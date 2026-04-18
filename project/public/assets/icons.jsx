// Loguivy-Plougras — icons (Lucide-style stroke)
const SiteIcon = ({ name, size = 20, color = 'currentColor', strokeWidth = 1.6 }) => {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'building':  return <svg {...p}><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>;
    case 'id-card':   return <svg {...p}><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h5M14 14h3"/></svg>;
    case 'recycle':   return <svg {...p}><path d="M7 19H4.815a1.83 1.83 0 01-1.57-.881 1.785 1.785 0 01-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 001.556-.89 1.784 1.784 0 00-.003-1.775l-1.234-2.12"/><path d="M14 16l-3 3 3 3"/><path d="M8.293 13.596L7.196 9.5 3.1 10.596"/><path d="M9.344 5.811c.03-.608.456-1.132 1.05-1.294a1.824 1.824 0 011.819.518l1.523 1.52"/><path d="M13.378 9.633l4.096 1.098 1.097-4.096"/></svg>;
    case 'key':       return <svg {...p}><circle cx="7.5" cy="15.5" r="3.5"/><path d="M10 13l8-8 3 3-2 2-2-2-2 2"/></svg>;
    case 'calendar':  return <svg {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'clock':     return <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case 'map-pin':   return <svg {...p}><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'phone':     return <svg {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
    case 'mail':      return <svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
    case 'arrow':     return <svg {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'arrow-ur':  return <svg {...p}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;
    case 'search':    return <svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
    case 'menu':      return <svg {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
    case 'close':     return <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case 'accessibility': return <svg {...p}><circle cx="12" cy="4" r="2" fill={color}/><path d="M5 8h14M12 8v6M9 22l3-8 3 8M8 14h8"/></svg>;
    case 'file':      return <svg {...p}><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>;
    case 'map':       return <svg {...p}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
    case 'book':      return <svg {...p}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>;
    case 'send':      return <svg {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
    case 'coin':      return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M15 9.354a4 4 0 100 5.292"/></svg>;
    case 'baby':      return <svg {...p}><path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M18 8a6 6 0 00-12 0"/><circle cx="12" cy="12" r="10"/></svg>;
    case 'heart':     return <svg {...p}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
    case 'link':      return <svg {...p}><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
    case 'users':     return <svg {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
    case 'flag':      return <svg {...p}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
    case 'tree':      return <svg {...p}><path d="M12 2L6 10h3v4H6l6 8 6-8h-3v-4h3z"/></svg>;
    case 'truck':     return <svg {...p}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
    case 'leaf':      return <svg {...p}><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.3-3.8 19.4-8.2 17.04z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>;
    case 'bus':       return <svg {...p}><path d="M4 17V5a2 2 0 012-2h12a2 2 0 012 2v12"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M4 11h16M9 3v8M15 3v8"/></svg>;
    case 'fork':      return <svg {...p}><path d="M18 8a6 6 0 01-12 0V2"/><path d="M12 14v8"/></svg>;
    case 'plus':      return <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'minus':     return <svg {...p}><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'contrast':  return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M12 2v20" fill={color} stroke="none"/><path d="M12 2a10 10 0 000 20z" fill={color} stroke="none"/></svg>;
    case 'type':      return <svg {...p}><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
    case 'facebook':  return <svg {...p}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>;
    default: return <svg {...p}><circle cx="12" cy="12" r="9"/></svg>;
  }
};
window.SiteIcon = SiteIcon;
