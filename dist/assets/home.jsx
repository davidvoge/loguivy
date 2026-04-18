// Homepage sections
const Hero = ({ variation, onNavigate }) => {
  if (variation === 'b') {
    return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__inner">
            <div>
              <div className="hero__eyebrow">Site officiel de la commune</div>
              <h1 id="hero-title" className="hero__title">Loguivy-Plougras, une commune vivante au cœur du Trégor.</h1>
              <p className="hero__lede">Au croisement de Lannion, Guingamp et Morlaix. 4 800 hectares de bocage, de forêt et de chemins — et un village qui continue de se tenir droit.</p>
            </div>
          </div>
          <div className="hero-mosaic">
            <a className="hero-mosaic-cell" href="#" onClick={(e) => { e.preventDefault(); onNavigate('mairie'); }}>
              <div className="hero-mosaic-cell__label">01 · Mairie</div>
              <h2 className="hero-mosaic-cell__title">Le conseil & les élus</h2>
              <div className="hero-mosaic-cell__arrow"><SiteIcon name="arrow-ur" size={22} /></div>
            </a>
            <a className="hero-mosaic-cell" href="#" onClick={(e) => { e.preventDefault(); onNavigate('demarches'); }}>
              <div className="hero-mosaic-cell__label">02 · Démarches</div>
              <h2 className="hero-mosaic-cell__title">Vos démarches en ligne</h2>
              <div className="hero-mosaic-cell__arrow"><SiteIcon name="arrow-ur" size={22} /></div>
            </a>
            <a className="hero-mosaic-cell" href="#" onClick={(e) => { e.preventDefault(); onNavigate('culture'); }}>
              <div className="hero-mosaic-cell__label">03 · Découverte</div>
              <h2 className="hero-mosaic-cell__title">Culture & tourisme</h2>
              <div className="hero-mosaic-cell__arrow"><SiteIcon name="arrow-ur" size={22} /></div>
            </a>
            <a className="hero-mosaic-cell" href="#" onClick={(e) => { e.preventDefault(); onNavigate('vie-locale'); }}>
              <div className="hero-mosaic-cell__label">04 · Vie locale</div>
              <h2 className="hero-mosaic-cell__title">Associations & équipements</h2>
              <div className="hero-mosaic-cell__arrow"><SiteIcon name="arrow-ur" size={22} /></div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (variation === 'c') {
    return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__inner">
            <div>
              <div className="hero__eyebrow">Bienvenue</div>
              <h1 id="hero-title" className="hero__title">Ici, on vit <em>autrement</em> — au rythme du bocage, des chapelles et de la rivière.</h1>
              <p className="hero__lede">Loguivy-Plougras est une commune de 650 habitantes et habitants, blottie entre Lannion et Guingamp. Site officiel : démarches, actualités, vie associative et patrimoine.</p>
              <div className="hero__ctas">
                <a href="#" className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); onNavigate('demarches'); }}>Accéder aux démarches</a>
                <a href="#" className="btn btn--secondary btn--lg" onClick={(e) => { e.preventDefault(); onNavigate('culture'); }}>Découvrir la commune</a>
              </div>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="placeholder-art placeholder-art--orange">
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 70 L50 20 L80 70 Z" />
                  <path d="M30 70 L30 55 L40 55 L40 70" />
                  <path d="M55 70 L55 50 L70 50 L70 70" />
                  <line x1="10" y1="70" x2="90" y2="70" />
                  <circle cx="50" cy="30" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variation A — institutionnel (hero éditorial chaleureux)
  return (
    <section className="hero hero--editorial" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__inner">
          <div>
            <div className="hero__eyebrow">{"\n"}</div>
            <h1 id="hero-title" className="hero__title" style={{fontSize: '48px'}}>Ici, on vit <em>autrement</em> — au rythme du bocage, des chapelles et de la rivière.</h1>
            <p className="hero__lede">Site officiel de la commune. Démarches, actualités, vie associative et patrimoine — tout ce qu'il faut pour habiter, travailler et visiter Loguivy-Plougras.</p>
            <div className="hero__ctas">
              <a href="#" className="btn btn--primary btn--lg" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('demarches'); }}>Mes démarches en ligne</a>
              <a href="#" className="btn btn--secondary btn--lg" onClick={(e) => { e.preventDefault(); onNavigate('mairie'); }}>
                <SiteIcon name="phone" size={14} /> Contacter la mairie
              </a>
            </div>
            <div className="hero__chips">
              <span><SiteIcon name="clock" size={13} /> Mairie ouverte ce matin · 9h–12h</span>
              <span><SiteIcon name="calendar" size={13} /> Conseil municipal le 21 mars</span>
            </div>
          </div>
          <div className="hero__visual" aria-label="Le bourg de Loguivy-Plougras">
            <div className="placeholder-art placeholder-art--mix">
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M60 150 L60 95 L80 75 L100 95 L100 150 Z" />
                <path d="M80 75 L80 58 L75 58 L80 46 L85 58 L80 58" fill="currentColor" />
                <rect x="70" y="110" width="8" height="22" />
                <rect x="82" y="110" width="8" height="22" />
                <path d="M100 150 L100 105 L132 105 L132 150 Z" />
                <path d="M132 150 L132 118 L162 118 L162 150 Z" />
                <line x1="20" y1="150" x2="180" y2="150" strokeWidth="1.6" />
                <circle cx="22" cy="132" r="11" />
                <line x1="22" y1="137" x2="22" y2="150" />
                <circle cx="178" cy="136" r="9" />
                <line x1="178" y1="140" x2="178" y2="150" />
                <path d="M0 168 Q 100 145 200 168" opacity="0.4" />
                <path d="M0 180 Q 100 160 200 180" opacity="0.3" />
                <circle cx="170" cy="40" r="10" opacity="0.5" />
              </svg>
            </div>
            <div className="hero__caption">Le bourg, vue depuis la route de Plougras</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickAccess = ({ onNavigate }) => (
  <section className="section section--white quick-access-section" aria-labelledby="quick-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Accès rapide</div>
          <h2 id="quick-title" className="section__title">Vos démarches les plus consultées</h2>
        </div>
        <a href="#" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); onNavigate('demarches'); }}>
          Toutes les démarches <SiteIcon name="arrow" size={14} />
        </a>
      </div>
      <div className="quick-grid">
        {SITE_DATA.quickAccess.map((c, i) => (
          <a key={i} href="#" className={`quick-card quick-card--${c.theme}`} onClick={(e) => { e.preventDefault(); onNavigate(c.targetPage); }}>
            <div className="quick-card__bar" aria-hidden="true" />
            <div className="quick-card__icon"><SiteIcon name={c.icon} size={22} /></div>
            <h3 className="quick-card__title">{c.title}</h3>
            <p className="quick-card__desc">{c.desc}</p>
            <span className="quick-card__arrow">Y aller <SiteIcon name="arrow" size={12} /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Rubrics = ({ onNavigate }) => (
  <section className="section section--dotted" aria-labelledby="rubrics-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Explorer le site</div>
          <h2 id="rubrics-title" className="section__title">Quatre grandes rubriques,<br/>pour tout trouver.</h2>
        </div>
      </div>
      <div className="rubric-grid">
        {SITE_DATA.rubrics.map((r, i) => (
          <a key={i} href="#" className={`rubric-tile rubric-tile--${r.theme}`} onClick={(e) => { e.preventDefault(); onNavigate(r.targetPage); }}>
            <div className="rubric-tile__count" aria-hidden="true">{r.count}</div>
            <div className="rubric-tile__eyebrow">{r.eyebrow}</div>
            <h3 className="rubric-tile__title">{r.title.split('\n').map((l,j)=><React.Fragment key={j}>{l}{j===0 && <br/>}</React.Fragment>)}</h3>
            <p className="rubric-tile__desc">{r.desc}</p>
            <span className="rubric-tile__cta">Explorer <SiteIcon name="arrow" size={14} /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const News = () => (
  <section className="section section--white" aria-labelledby="news-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Actualités</div>
          <h2 id="news-title" className="section__title">Ce qui se passe en ce moment</h2>
          <p className="section__lede">Conseil municipal, procès-verbaux, informations pratiques et vie associative.</p>
        </div>
        <a href="#" className="btn btn--ghost">Toutes les actualités <SiteIcon name="arrow" size={14} /></a>
      </div>
      <div className="news-grid">
        {SITE_DATA.news.map((n, i) => (
          <a key={i} href="#" className={`news-card news-card--${n.theme} ${n.featured ? 'news-card--featured' : ''}`}>
            <div className="news-card__image">
              <div className={`placeholder-art placeholder-art--${n.theme}`}>
                <SiteIcon name={n.theme === 'teal' ? 'building' : n.theme === 'purple' ? 'file' : 'tree'} size={40} />
              </div>
            </div>
            <div className="news-card__body">
              <div className="news-card__meta">
                <span className={`tag tag--${n.theme === 'teal' ? '' : n.theme}`} style={{background: `var(--${n.theme}-100)`, color: `var(--${n.theme}-800)`}}>{n.category}</span>
                <span>{n.date}</span>
              </div>
              <h3 className="news-card__title">{n.title}</h3>
              <p className="news-card__excerpt">{n.excerpt}</p>
              <span className="news-card__readmore">Lire la suite <SiteIcon name="arrow" size={12} /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const InfoBar = () => (
  <section className="section section--tight section--paper" aria-labelledby="info-title" id="contact">
    <div className="container">
      <h2 id="info-title" className="section__title" style={{marginBottom: 24, fontSize: 24}}>La mairie en pratique</h2>
      <div className="info-bar">
        <div className="info-bar__cell">
          <div className="info-bar__icon"><SiteIcon name="clock" size={20} /></div>
          <div>
            <div className="info-bar__label">Horaires d'ouverture</div>
            <div className="info-bar__value">Lundi au samedi, 9h–12h</div>
            <div className="info-bar__note">L'après-midi sur rendez-vous</div>
          </div>
        </div>
        <div className="info-bar__cell">
          <div className="info-bar__icon"><SiteIcon name="map-pin" size={20} /></div>
          <div>
            <div className="info-bar__label">Adresse</div>
            <div className="info-bar__value">1 place de la Mairie</div>
            <div className="info-bar__note">22780 Loguivy-Plougras</div>
          </div>
        </div>
        <div className="info-bar__cell">
          <div className="info-bar__icon"><SiteIcon name="phone" size={20} /></div>
          <div>
            <div className="info-bar__label">Téléphone & courriel</div>
            <div className="info-bar__value"><a href={`tel:${SITE_DATA.contact.phoneTel}`} className="link">{SITE_DATA.contact.phoneDisplay}</a></div>
            <div className="info-bar__note"><a href={`mailto:${SITE_DATA.contact.email}`} className="link">{SITE_DATA.contact.email}</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Agenda = () => (
  <section className="section section--white" aria-labelledby="agenda-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Agenda</div>
          <h2 id="agenda-title" className="section__title">Les prochains rendez-vous</h2>
        </div>
        <a href="#" className="btn btn--ghost">Tout l'agenda <SiteIcon name="arrow" size={14} /></a>
      </div>
      <div className="agenda-list">
        {SITE_DATA.agenda.map((a, i) => (
          <a key={i} href="#" className={`agenda-item agenda-item--${a.theme}`}>
            <div className="agenda-date">
              <div className="agenda-date__day">{a.day}</div>
              <div className="agenda-date__month">{a.month}</div>
            </div>
            <div>
              <h3 className="agenda-item__title">{a.title}</h3>
              <div className="agenda-item__meta">
                {a.meta.map((m, j) => <span key={j}>{m}</span>)}
              </div>
            </div>
            <SiteIcon name="arrow" size={18} color="var(--ink-mute)" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Discover = ({ onNavigate }) => (
  <section className="section section--white" aria-labelledby="discover-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Découvrir</div>
          <h2 id="discover-title" className="section__title">Le patrimoine vivant de Loguivy</h2>
          <p className="section__lede">Chapelles, fontaines, forêt de Beffou, sentiers de randonnée : des lieux à respirer, à arpenter, à transmettre.</p>
        </div>
        <a href="#" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); onNavigate('culture'); }}>Culture & tourisme <SiteIcon name="arrow" size={14} /></a>
      </div>
      <div className="discover-grid">
        {SITE_DATA.discover.map((d, i) => (
          <a key={i} href="#" className="discover-card" onClick={(e) => { e.preventDefault(); onNavigate(d.targetPage || 'culture'); }}>
            <div className="discover-card__image">
              <div className="placeholder-art placeholder-art--orange">
                <SiteIcon name={i === 0 ? 'map-pin' : i === 1 ? 'tree' : 'book'} size={40} />
              </div>
            </div>
            <div className="discover-card__body">
              <span className="discover-card__tag">{d.tag}</span>
              <h3 className="discover-card__title">{d.title}</h3>
              <p className="discover-card__desc">{d.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Bulletin = () => (
  <section className="section section--tight section--paper" aria-labelledby="bul-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Bulletin municipal</div>
          <h2 id="bul-title" className="section__title" style={{fontSize: 28}}>Les infos de la semaine</h2>
        </div>
      </div>
      <div className="bulletin-grid">
        {SITE_DATA.bulletin.map((b, i) => (
          <div key={i} className={`bulletin-item bulletin-item--${b.theme}`}>
            <div className="bulletin-item__label">{b.label}</div>
            <h3 className="bulletin-item__title">{b.title}</h3>
            <p className="bulletin-item__text">{b.text}</p>
            <a href="#" className="bulletin-item__cta">En savoir plus <SiteIcon name="arrow" size={12} /></a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const KeyFigures = ({ onNavigate }) => (
  <section className="key-figures" aria-label="Loguivy-Plougras en chiffres">
    <div className="container">
      <div className="key-figures__inner">
        <div className="key-figures__lead">
          <div className="section__eyebrow">Loguivy en chiffres</div>
          <p className="key-figures__text">Une commune rurale du Trégor, entre mer et Argoat, où chaque hameau compte.{' '}
            <a href="#" className="link" style={{ color: 'inherit', fontWeight: 600 }} onClick={(e) => { e.preventDefault(); onNavigate('territoire'); }}>Découvrir le territoire</a>
          </p>
        </div>
        {SITE_DATA.keyFigures.map((k, i) => (
          <div key={i} className="key-figures__stat">
            <div className="key-figures__n">{k.n}</div>
            <div className="key-figures__l">{k.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="section section--pastel-orange" aria-labelledby="svc-title">
    <div className="container">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Services au quotidien</div>
          <h2 id="svc-title" className="section__title">Ce qu'on trouve ici, à portée de pas</h2>
          <p className="section__lede">Cantine locale, portage de repas, France Services, transport scolaire — les services publics de proximité pour tous les âges.</p>
        </div>
      </div>
      <div className="services-grid">
        {SITE_DATA.services.map((s, i) => (
          <a key={i} href="#" className="service-tile">
            <div className="service-tile__icon"><SiteIcon name={s.icon} size={22} /></div>
            <div>
              <h3 className="service-tile__title">{s.title}</h3>
              <p className="service-tile__meta">{s.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Villages = ({ onNavigate }) => (
  <section className="villages-section" aria-labelledby="vil-title">
    <div className="container">
      <div className="villages-inner">
        <div className="villages-left">
          <div className="section__eyebrow" style={{color: 'rgba(255,255,255,0.7)'}}>Le territoire</div>
          <h2 id="vil-title" className="villages-title">Le bourg et ses hameaux</h2>
          <p className="villages-text">Loguivy-Plougras, c'est un bourg et une vingtaine de villages et lieux-dits répartis sur 4 800 hectares. Chaque hameau a son caractère, son chemin, sa fontaine.</p>
          <a href="#" className="btn btn--secondary" style={{marginTop: 20}} onClick={(e) => { e.preventDefault(); onNavigate('territoire'); }}>Carte du territoire <SiteIcon name="arrow" size={14} /></a>
        </div>
        <div className="villages-list">
          {SITE_DATA.villages.map((v, i) => (
            <span key={i} className="village-chip">{v}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const VillageBand = ({ variant = 'teal' }) => (
  <div className={`village-band village-band--${variant}`} aria-hidden="true">
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
      {/* Back hills */}
      <path d="M0 140 L0 95 Q 140 70 280 85 T 560 80 T 840 90 T 1120 75 T 1440 85 L 1440 140 Z"
            fill="currentColor" opacity="0.35" />
      {/* Mid hill + clocher (chapelle silhouette) */}
      <path d="M0 140 L0 115 Q 100 100 220 108 L 260 108 L 260 92 L 266 82 L 272 92 L 272 108 L 340 108
               Q 460 100 580 112 L 740 108 L 760 88 L 768 72 L 776 88 L 776 108 L 900 108
               Q 1080 100 1200 114 T 1440 110 L 1440 140 Z"
            fill="currentColor" opacity="0.6" />
      {/* Trees */}
      <g fill="currentColor" opacity="0.75">
        <path d="M100 140 L100 118 Q 90 116 90 110 Q 90 102 100 100 Q 110 102 110 110 Q 110 116 100 118 Z" />
        <path d="M420 140 L420 120 Q 410 118 410 112 Q 410 105 420 103 Q 430 105 430 112 Q 430 118 420 120 Z" />
        <path d="M980 140 L980 118 Q 970 116 970 110 Q 970 102 980 100 Q 990 102 990 110 Q 990 116 980 118 Z" />
        <path d="M1300 140 L1300 121 Q 1290 119 1290 113 Q 1290 106 1300 104 Q 1310 106 1310 113 Q 1310 119 1300 121 Z" />
      </g>
      {/* Ground line */}
      <line x1="0" y1="140" x2="1440" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  </div>
);

Object.assign(window, { Hero, QuickAccess, Rubrics, News, InfoBar, Agenda, Discover, Bulletin, KeyFigures, Services, Villages, VillageBand });
