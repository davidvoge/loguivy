// Chrome: header, utility strip, footer, A11y widget, Tweaks panel
const { useState, useEffect, useRef } = React;

const UtilityStrip = ({ onNavigate }) => {
  const c = SITE_DATA.contact;
  return (
  <div className="utility" role="complementary" aria-label="Informations pratiques">
    <div className="container">
      <div className="utility__left">
        <span><SiteIcon name="clock" size={14} /> <span style={{marginLeft:6}}>Lun–Sam 9h–12h · après-midi sur RDV</span></span>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('mairie'); }}><SiteIcon name="map-pin" size={14} /> <span style={{marginLeft:4}}>{c.addressShort}</span></a>
        <a href={`tel:${c.phoneTel}`}>{c.phoneDisplay}</a>
      </div>
      <div className="utility__right">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('plan-site'); }}>Plan du site</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('accessibilite'); }}>Accessibilité</a>
        <button type="button" aria-label="Rechercher sur le site">
          <SiteIcon name="search" size={12} /> <span style={{marginLeft:4}}>Rechercher</span>
        </button>
      </div>
    </div>
  </div>
  );
};

const Header = ({ active = 'accueil', onNavigate, layoutKey }) => {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max <= 0 ? 0 : el.scrollTop / max;
      setScrollProgress(Math.min(100, Math.max(0, ratio * 100)));
    };
    update();
    const t = setTimeout(update, 0);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const main = document.getElementById('main');
    let ro;
    if (main && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => update());
      ro.observe(main);
    }
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      ro?.disconnect();
    };
  }, [layoutKey]);

  const go = (page) => {
    onNavigate(page);
    setOpen(false);
  };
  const progressRounded = Math.round(scrollProgress);
  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="site-header__inner">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); go('home'); }} aria-label="Loguivy-Plougras — retour à l'accueil">
            <div className="brand__mark" aria-hidden="true">LP</div>
            <div className="brand__text">
              <span className="brand__title">Loguivy-Plougras</span>
              <span className="brand__sub">Commune des Côtes-d'Armor · Bretagne</span>
            </div>
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          >
            <SiteIcon name={open ? 'close' : 'menu'} size={18} aria-hidden="true" />
            <span className="nav-toggle__label">Menu</span>
          </button>
          <nav id="primary-nav" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
            {SITE_DATA.nav.map(n => (
              <a key={n.id} href="#" role="button"
                 onClick={(e) => { e.preventDefault(); go(n.targetPage); }}
                 className={active === n.id ? 'is-active' : ''}
                 style={active === n.id ? { '--theme-color': `var(--${n.theme}-700)` } : {}}>
                {n.label}
              </a>
            ))}
            <a href="#" className="primary-nav__cta" onClick={(e) => { e.preventDefault(); go('mairie'); }}>Contacter la mairie</a>
          </nav>
        </div>
      </div>
      <div
        className="scroll-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressRounded}
        aria-label="Progression du défilement dans la page"
      >
        <div className="scroll-progress__track" aria-hidden="true">
          <div
            className="scroll-progress__fill"
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
          />
        </div>
      </div>
    </header>
  );
};

const Footer = ({ onNavigate }) => {
  const c = SITE_DATA.contact;
  return (
  <footer className="site-footer" role="contentinfo">
    <div className="container">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__mark">Loguivy-Plougras</div>
          <p className="site-footer__tag">Site officiel de la commune. Une équipe à l'écoute, des services de proximité, un village vivant.</p>
          <div style={{display:'flex', alignItems:'center', gap:10, color:'#C5DEDB', fontSize:13}}>
            <SiteIcon name="map-pin" size={16} />
            <span>{c.addressFull}</span>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:10, color:'#C5DEDB', fontSize:13}}>
            <SiteIcon name="phone" size={16} />
            <a href={`tel:${c.phoneTel}`}>{c.phoneDisplay}</a>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:10, color:'#C5DEDB', fontSize:13}}>
            <SiteIcon name="mail" size={16} />
            <a href={`mailto:${c.email}`}>{c.email}</a>
          </div>
        </div>
        {SITE_DATA.footerColumns.map((col) => (
          <div key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="site-footer__bottom">
        <div>© 2026 Commune de Loguivy-Plougras · Site conforme RGAA 4.1 niveau AA</div>
        <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('mentions-legales'); }}>Mentions légales</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('donnees-personnelles'); }}>Données personnelles</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('accessibilite'); }}>Accessibilité</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('plan-site'); }}>Plan du site</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

const A11yWidget = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('normal');
  const [contrast, setContrast] = useState(false);
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    const b = document.body;
    b.classList.remove('a11y-large', 'a11y-xlarge');
    if (size === 'large') b.classList.add('a11y-large');
    if (size === 'xlarge') b.classList.add('a11y-xlarge');
    b.classList.toggle('a11y-contrast', contrast);
    b.classList.toggle('a11y-underline', underline);
  }, [size, contrast, underline]);

  return (
    <div className="a11y-widget">
      {open && (
        <div className="a11y-panel is-open" role="dialog" aria-label="Outils d'accessibilité">
          <h3>Accessibilité</h3>
          <div className="a11y-row">
            <span className="a11y-row__label">Taille du texte</span>
            <div className="a11y-btns" role="group" aria-label="Taille du texte">
              <button className={size==='normal'?'is-active':''} onClick={()=>setSize('normal')} aria-label="Taille normale">A</button>
              <button className={size==='large'?'is-active':''} onClick={()=>setSize('large')} aria-label="Texte agrandi" style={{fontSize:15}}>A</button>
              <button className={size==='xlarge'?'is-active':''} onClick={()=>setSize('xlarge')} aria-label="Texte très agrandi" style={{fontSize:17}}>A</button>
            </div>
          </div>
          <div className="a11y-row">
            <span className="a11y-row__label">Contraste élevé</span>
            <button className={`${contrast?'is-active':''}`} onClick={()=>setContrast(!contrast)} aria-pressed={contrast}
                    style={{padding:'6px 12px', borderRadius:6, border:'1px solid var(--line)', cursor:'pointer', fontSize:12}}>
              {contrast ? 'Activé' : 'Désactivé'}
            </button>
          </div>
          <div className="a11y-row">
            <span className="a11y-row__label">Liens soulignés</span>
            <button className={`${underline?'is-active':''}`} onClick={()=>setUnderline(!underline)} aria-pressed={underline}
                    style={{padding:'6px 12px', borderRadius:6, border:'1px solid var(--line)', cursor:'pointer', fontSize:12}}>
              {underline ? 'Activé' : 'Désactivé'}
            </button>
          </div>
          <button onClick={()=>{setSize('normal');setContrast(false);setUnderline(false);}}
                  style={{width:'100%', marginTop:10, padding:'8px', background:'var(--panel-mute)', border:'1px solid var(--line)', borderRadius:6, cursor:'pointer', fontSize:12, color:'var(--ink-2)'}}>
            Réinitialiser
          </button>
          <p style={{fontSize:11, color:'var(--ink-mute)', margin:'12px 0 0', lineHeight:1.4}}>
            Site conforme RGAA 4.1 niveau AA.{' '}
            <a href="#" className="link" onClick={(e) => { e.preventDefault(); onNavigate('accessibilite'); setOpen(false); }}>Déclaration d'accessibilité</a>
          </p>
        </div>
      )}
      <button className="a11y-toggle" onClick={()=>setOpen(!open)}
              aria-expanded={open} aria-label="Ouvrir les outils d'accessibilité" title="Accessibilité">
        <SiteIcon name="accessibility" size={26} />
      </button>
    </div>
  );
};

Object.assign(window, { UtilityStrip, Header, Footer, A11yWidget });
