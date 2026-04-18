// Inner pages — hubs, plan du site, légal, accessibilité, territoire
const { Fragment, useState, useEffect, useRef } = React;

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

/** Icône épingle Leaflet (SVG data-URL), couleur active pour le lieu sélectionné */
function quartierPinIcon(L, isActive) {
  const fill = isActive ? '#0d9488' : '#0f5c54';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" role="img" aria-hidden="true"><path fill="${fill}" stroke="#ffffff" stroke-width="1.25" stroke-linejoin="round" d="M14 1C7.9 1 3 5.8 3 11.5 3 19 14 35 14 35s11-16 11-23.5C25 5.8 20.1 1 14 1z"/><circle fill="#ffffff" cx="14" cy="11.5" r="3.3"/></svg>`;
  return L.icon({
    iconUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -32],
    className: 'quartier-leaflet-pin',
  });
}

const Crumbs = ({ onNavigate, currentLabel }) => (
  <nav className="crumbs" aria-label="Fil d'Ariane">
    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Accueil</a>
    <span aria-hidden="true">›</span>
    <span aria-current="page">{currentLabel}</span>
  </nav>
);

const DemarchesPage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--purple">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Mes démarches" />
        <div className="page-header__eyebrow">Services aux habitants</div>
        <h1 className="page-header__title">Vos démarches en ligne</h1>
        <p className="page-header__lede">Toutes les formalités de la vie courante : urbanisme, état civil, école, social, réservations, déchets. La plupart des démarches sont expliquées ici ; pour les dossiers, la mairie vous accompagne sur place ou par courriel.</p>
      </div>
    </div>
    <div className="container">
      <div className="demarche-subnav" role="navigation" aria-label="Catégories de démarches">
        {SITE_DATA.demarchesCategories.map(c => (
          <a key={c.id} href={`#${c.id}`} className="demarche-chip">
            <span>{c.label}</span>
            <span className="demarche-chip__count">{c.count}</span>
          </a>
        ))}
      </div>

      {SITE_DATA.demarchesGroupOrder.map((key) => {
        const g = SITE_DATA.demarchesByGroup[key];
        if (!g) return null;
        return (
          <div key={key} id={{ urbanisme: 'urbanisme', etatCivil: 'etat-civil', citoyen: 'citoyen', ecole: 'ecole', social: 'social', reservations: 'reservations', dechets: 'dechets', commerces: 'commerces' }[key]} className={`demarche-group demarche-group--${g.theme}`}>
            <h2 className="demarche-group__title">
              <span className="demarche-group__bar" aria-hidden="true" />
              {g.label}
            </h2>
            <div className="demarche-list">
              {g.items.map((it, i) => (
                <a key={i} href="#" className="demarche-link" onClick={(e) => e.preventDefault()}>
                  <div className="demarche-link__icon"><SiteIcon name={it.icon} size={18} /></div>
                  <div>
                    <h3 className="demarche-link__title">{it.title}</h3>
                    <p className="demarche-link__desc">{it.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </Fragment>
);

const CulturePage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--orange">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Culture & tourisme" />
        <div className="page-header__eyebrow">Découvrir la commune</div>
        <h1 className="page-header__title">Un patrimoine à respirer, à arpenter, à transmettre.</h1>
        <p className="page-header__lede">Patrimoine, médiathèque, équipements et randonnées : tout ce qui fait de Loguivy-Plougras un territoire à vivre et à visiter, entre Trégor et bocage.</p>
      </div>
    </div>
    <section className="section" id="culture-piliers">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Parcours</div>
            <h2 className="section__title">Culture, loisirs & paysages</h2>
          </div>
        </div>
        <div className="rubric-grid">
          {SITE_DATA.culturePillars.map((r, i) => (
            <a key={i} href="#" className={`rubric-tile rubric-tile--${r.t}`} onClick={(e) => e.preventDefault()}>
              <div className="rubric-tile__icon" aria-hidden="true"><SiteIcon name={r.icon} size={22} /></div>
              <div className="rubric-tile__eyebrow">{r.l}</div>
              <h3 className="rubric-tile__title">{r.title}</h3>
              <p className="rubric-tile__desc">{r.desc}</p>
              <span className="rubric-tile__cta">Explorer <SiteIcon name="arrow" size={14} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
    <section className="section section--paper">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Galerie</div>
            <h2 className="section__title">Neuf bonnes raisons de s'arrêter chez nous</h2>
          </div>
        </div>
        <div className="discover-grid">
          {SITE_DATA.cultureDiscoverTitles.map((title, i) => (
            <a key={i} href="#" className="discover-card" onClick={(e) => e.preventDefault()}>
              <div className="discover-card__image">
                <div className={`placeholder-art placeholder-art--${['orange','teal','green','purple','orange','purple','teal','green','orange'][i]}`}>
                  <SiteIcon name={['map-pin','book','tree','users','key','users','heart','leaf','flag'][i]} size={36} />
                </div>
              </div>
              <div className="discover-card__body">
                <h3 className="discover-card__title">{title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  </Fragment>
);

const MairiePage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--teal">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="La mairie" />
        <div className="page-header__eyebrow">Institution & accueil</div>
        <h1 className="page-header__title">La mairie au service des habitants</h1>
        <p className="page-header__lede">Conseil municipal, transparence des décisions, accueil et permanences : retrouvez ici les grandes fonctions de la collectivité, réorganisées pour une lecture claire.</p>
      </div>
    </div>
    <section className="section section--white">
      <div className="container">
        <div className="rubric-grid">
          {SITE_DATA.mairieTiles.map((tile, i) => (
            <a key={i} href="#" className={`rubric-tile rubric-tile--${tile.theme}`} onClick={(e) => e.preventDefault()}>
              <div className="rubric-tile__icon" aria-hidden="true"><SiteIcon name={tile.icon} size={22} /></div>
              <div className="rubric-tile__eyebrow">{tile.eyebrow}</div>
              <h2 className="rubric-tile__title">{tile.title}</h2>
              <p className="rubric-tile__desc">{tile.desc}</p>
              <span className="rubric-tile__cta">Consulter <SiteIcon name="arrow" size={14} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
    <section className="section section--paper" id="contact-mairie">
      <div className="container">
        <div className="site-prose">
          <h2>Accueil & contact</h2>
          <p>
            La mairie et l'agence postale sont ouvertes du <strong>lundi au samedi, 9h à 12h</strong>.
            Un accueil sur rendez-vous est possible l'après-midi : contactez-nous par téléphone ou courriel.
          </p>
          <ul>
            <li><strong>Adresse :</strong> {SITE_DATA.contact.addressFull}</li>
            <li><strong>Téléphone :</strong> <a href={`tel:${SITE_DATA.contact.phoneTel}`}>{SITE_DATA.contact.phoneDisplay}</a></li>
            <li><strong>Fax :</strong> {SITE_DATA.contact.faxDisplay}</li>
            <li><strong>Courriel :</strong> <a href={`mailto:${SITE_DATA.contact.email}`}>{SITE_DATA.contact.email}</a></li>
          </ul>
        </div>
      </div>
    </section>
  </Fragment>
);

const VieLocalePage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--green">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Vie locale" />
        <div className="page-header__eyebrow">Quotidien & convivialité</div>
        <h1 className="page-header__title">Associations, commerces & équipements de proximité</h1>
        <p className="page-header__lede">Ce hub regroupe ce qui relève du vivre-ensemble au quotidien : clubs, services locaux et lieux utiles. Les contenus détaillés restent structurés comme sur le site public, mais regroupés ici pour correspondre à la navigation de la refonte.</p>
      </div>
    </div>
    <section className="section section--white">
      <div className="container">
        <div className="rubric-grid">
          {SITE_DATA.vieLocaleTiles.map((tile, i) => (
            <a key={i} href="#" className={`rubric-tile rubric-tile--${tile.theme}`} onClick={(e) => e.preventDefault()}>
              <div className="rubric-tile__icon" aria-hidden="true"><SiteIcon name={tile.icon} size={22} /></div>
              <div className="rubric-tile__eyebrow">{tile.eyebrow}</div>
              <h2 className="rubric-tile__title">{tile.title}</h2>
              <p className="rubric-tile__desc">{tile.desc}</p>
              <span className="rubric-tile__cta">Découvrir <SiteIcon name="arrow" size={14} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  </Fragment>
);

const PlanSitePage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--teal">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Plan du site" />
        <div className="page-header__eyebrow">Navigation</div>
        <h1 className="page-header__title">Plan du site</h1>
        <p className="page-header__lede">Vue d'ensemble des rubriques du prototype, calquée sur l'organisation du site officiel et simplifiée pour la refonte.</p>
      </div>
    </div>
    <section className="section section--white">
      <div className="container">
        <div className="plan-site-grid">
          {SITE_DATA.siteMapSections.map((sec) => (
            <div key={sec.title} className={`plan-site-card plan-site-card--${sec.theme}`}>
              <h2 className="plan-site-card__title">{sec.title}</h2>
              <ul className="plan-site-card__list">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Fragment>
);

const MentionsLegalesPage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--purple">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Mentions légales" />
        <div className="page-header__eyebrow">Informations réglementaires</div>
        <h1 className="page-header__title">Mentions légales</h1>
        <p className="page-header__lede">Texte type maquette — à valider par la commune avant mise en production.</p>
      </div>
    </div>
    <section className="section section--paper">
      <div className="container">
        <div className="site-prose">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Mairie de Loguivy-Plougras</strong><br />
            {SITE_DATA.contact.addressFull}<br />
            Tél. {SITE_DATA.contact.phoneDisplay} — {SITE_DATA.contact.email}
          </p>
          <h2>Directrice ou directeur de la publication</h2>
          <p>Le maire de Loguivy-Plougras (ou son délégataire), conformément aux usages en vigueur pour les sites des communes.</p>
          <h2>Hébergement</h2>
          <p>Les informations sur l'hébergeur technique et le prestataire de maintenance seront complétées lors du choix de l'infogérant.</p>
          <h2>Propriété intellectuelle</h2>
          <p>Les contenus textes, visuels et arborescence de ce prototype sont destinés à la refonte du site communal ; toute reproduction hors cadre contractuel est interdite.</p>
        </div>
      </div>
    </section>
  </Fragment>
);

const DonneesPersonnellesPage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--purple">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Données personnelles" />
        <div className="page-header__eyebrow">Confidentialité</div>
        <h1 className="page-header__title">Données personnelles & cookies</h1>
        <p className="page-header__lede">Principes alignés sur les pratiques du site actuel : peu de cookies « maison », services tiers possibles.</p>
      </div>
    </div>
    <section className="section section--paper">
      <div className="container">
        <div className="site-prose">
          <h2>Données collectées</h2>
          <p>
            Les formulaires et courriels adressés à la mairie font l'objet d'un traitement pour répondre aux demandes des usagers.
            Les finalités, durées de conservation et destinataires seront précisés dans la politique de confidentialité définitive.
          </p>
          <h2>Cookies</h2>
          <p>
            Comme sur le <a href="https://loguivy-plougras.fr/" rel="noopener noreferrer">site actuel</a>, certains modules tiers (ex. météo, réseaux sociaux) peuvent déposer des cookies.
            Une bannière de consentement et un lien « En savoir plus » pourront reprendre le dispositif en vigueur sur le site public.
          </p>
          <h2>Vos droits</h2>
          <p>Vous disposez des droits d'accès, de rectification, d'effacement et d'opposition dans les conditions prévues par le RGPD. Contact : {SITE_DATA.contact.email}.</p>
        </div>
      </div>
    </section>
  </Fragment>
);

const TerritoirePage = ({ onNavigate }) => {
  const mapRef = useRef(null);
  const mapInst = useRef(null);
  const layersById = useRef({});
  const communeBoundsRef = useRef(null);
  const selectedIdRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [mapError, setMapError] = useState(null);
  const quartiers = SITE_DATA.quartiers || [];

  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  const geoBase = () => {
    const p = window.location.pathname || '';
    const i = p.lastIndexOf('/');
    const prefix = i > 0 ? p.slice(0, i) : '';
    return `${prefix}/assets/geo`;
  };

  useEffect(() => {
    let cancelled = false;
    const el = mapRef.current;
    if (!el) return undefined;

    if (typeof window.L === 'undefined') {
      setMapError('La bibliothèque cartographique ne s’est pas chargée. Vérifiez votre connexion puis rechargez la page.');
      return undefined;
    }

    if (mapInst.current) {
      mapInst.current.remove();
      mapInst.current = null;
    }
    layersById.current = {};
    communeBoundsRef.current = null;
    setMapError(null);

    const L = window.L;
    const map = L.map(el, { scrollWheelZoom: false, attributionControl: true });
    mapInst.current = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const tmapCfg = SITE_DATA.territoryMap || {};
    const fallbackBounds = tmapCfg.bounds || [[48.46, -3.56], [48.56, -3.41]];

    const communePathStyle = {
      color: '#0f5c54',
      weight: 2,
      fillColor: '#64748b',
      fillOpacity: 0.07,
    };

    (async () => {
      const base = geoBase();
      try {
        const [rComm, rQ] = await Promise.all([
          fetch(`${base}/commune-22131.geojson`),
          fetch(`${base}/quartiers-22131.geojson`),
        ]);
        if (!rComm.ok || !rQ.ok) throw new Error('geo_fetch');
        const communeGeo = await rComm.json();
        const quartiersGeo = await rQ.json();
        if (cancelled) return;

        const communeLayer = L.geoJSON(communeGeo, {
          style: () => communePathStyle,
          interactive: false,
        }).addTo(map);

        const cb = communeLayer.getBounds();
        if (cb && typeof cb.isValid === 'function' && cb.isValid()) {
          communeBoundsRef.current = cb;
          map.fitBounds(cb, { padding: [16, 16] });
        } else {
          map.fitBounds(fallbackBounds, { padding: [16, 16] });
        }

        L.geoJSON(quartiersGeo, {
          pointToLayer(feature, latlng) {
            const id = (feature.properties && feature.properties.id) || '';
            return L.marker(latlng, {
              icon: quartierPinIcon(L, id === selectedIdRef.current),
            });
          },
          onEachFeature(feature, layer) {
            const p = feature.properties || {};
            const id = p.id;
            if (!id) return;
            const popupHtml = `<strong>${escapeHtml(p.nom || '')}</strong><p style="margin:8px 0 0;font-size:14px;line-height:1.4">${escapeHtml(p.desc || '')}</p>`;
            layer.bindPopup(popupHtml);
            layer.on('click', () => { setSelectedId(id); });
            layersById.current[id] = layer;
          },
        }).addTo(map);

        Object.keys(layersById.current).forEach((id) => {
          const layer = layersById.current[id];
          if (layer && typeof layer.setIcon === 'function') {
            layer.setIcon(quartierPinIcon(L, id === selectedIdRef.current));
          }
        });

        setTimeout(() => { if (!cancelled && mapInst.current) mapInst.current.invalidateSize(); }, 0);
      } catch (e) {
        if (!cancelled) {
          setMapError('Impossible de charger la carte du territoire (fichiers géographiques). Les données affichées peuvent être incomplètes.');
          map.fitBounds(fallbackBounds, { padding: [16, 16] });
        }
      }
    })();

    return () => {
      cancelled = true;
      if (mapInst.current) {
        mapInst.current.remove();
        mapInst.current = null;
      }
      layersById.current = {};
      communeBoundsRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInst.current;
    const L = window.L;
    if (L && map && layersById.current && Object.keys(layersById.current).length) {
      Object.keys(layersById.current).forEach((id) => {
        const layer = layersById.current[id];
        if (layer && typeof layer.setIcon === 'function') {
          layer.setIcon(quartierPinIcon(L, id === selectedId));
        }
      });
    }
    if (!map || !selectedId) return;
    const layer = layersById.current[selectedId];
    if (!layer) return;
    if (typeof layer.getLatLng === 'function') {
      map.flyTo(layer.getLatLng(), 16, { duration: 0.55, animate: true });
    }
    if (typeof layer.openPopup === 'function') layer.openPopup();
  }, [selectedId]);

  const resetMapView = () => {
    setSelectedId(null);
    const map = mapInst.current;
    if (map) map.closePopup();
    const b = communeBoundsRef.current;
    if (map && b && b.isValid && b.isValid()) {
      map.flyToBounds(b, { padding: [16, 16], duration: 0.55 });
    }
  };

  const intro = SITE_DATA.territoireIntro || {};

  return (
    <Fragment>
      <div className="page-header page-header--green">
        <div className="container">
          <Crumbs onNavigate={onNavigate} currentLabel="Le territoire" />
          <div className="page-header__eyebrow">Paysages & hameaux</div>
          <h1 className="page-header__title">Le territoire</h1>
          <p className="page-header__lede">{intro.lead}</p>
        </div>
      </div>
      <section className="section section--white">
        <div className="container">
          <div className="site-prose" style={{ maxWidth: 'none' }}>
            <p>{intro.noteCarte}</p>
          </div>
          {mapError ? (
            <p className="territoire-map-status" role="alert">{mapError}</p>
          ) : null}
          <div className="territoire-map-layout">
            <div className="territoire-map-wrap" role="region" aria-label="Carte interactive des quartiers">
              <div ref={mapRef} id="territoire-map" className="territoire-map-inner" />
            </div>
            <aside className="territoire-quartiers" aria-labelledby="quartiers-title">
              <div className="territoire-quartiers__head">
                <h2 id="quartiers-title" className="territoire-quartiers__title">Quartiers & hameaux</h2>
                <button type="button" className="btn btn--sm btn--secondary" onClick={resetMapView}>
                  Toute la commune
                </button>
              </div>
              <p className="territoire-quartiers__hint">Sélectionnez un lieu pour zoomer sur la carte.</p>
              <ul className="territoire-quartiers__list">
                {quartiers.map((q) => (
                  <li key={q.id}>
                    <button
                      type="button"
                      className={`quartier-pill ${selectedId === q.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedId(q.id)}
                    >
                      {q.nom}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const AccessibilitePage = ({ onNavigate }) => (
  <Fragment>
    <div className="page-header page-header--teal">
      <div className="container">
        <Crumbs onNavigate={onNavigate} currentLabel="Accessibilité" />
        <div className="page-header__eyebrow">RGAA 4.1 — niveau AA</div>
        <h1 className="page-header__title">Déclaration d'accessibilité</h1>
        <p className="page-header__lede">Ce prototype intègre dès la conception des exigences d'accessibilité : structure sémantique, contrastes, focus visibles et outils utilisateur.</p>
      </div>
    </div>
    <section className="section section--paper">
      <div className="container">
        <div className="site-prose">
          <h2>État de conformité</h2>
          <p>
            Le gabarit vise la conformité <strong>RGAA 4.1 niveau AA</strong> (taille du texte, contraste renforcé, liens soulignés, navigation clavier).
            Une audit formel reste à planifier avant mise en ligne définitive.
          </p>
          <h2>Outils disponibles</h2>
          <p>
            Le widget en bas à droite permet d'agrandir le texte, d'activer un contraste élevé et de souligner les liens.
            Ces réglages s'appliquent à l'ensemble des pages du prototype.
          </p>
          <h2>Signaler un problème</h2>
          <p>
            Pour tout défaut d'accessibilité, écrivez à <a href={`mailto:${SITE_DATA.contact.email}`}>{SITE_DATA.contact.email}</a> en précisant la page et le navigateur utilisé.
          </p>
          <p>
            <a href="#" className="btn btn--secondary" onClick={(e) => { e.preventDefault(); onNavigate('plan-site'); }}>Retour au plan du site</a>
          </p>
        </div>
      </div>
    </section>
  </Fragment>
);

Object.assign(window, {
  DemarchesPage,
  CulturePage,
  MairiePage,
  VieLocalePage,
  PlanSitePage,
  MentionsLegalesPage,
  DonneesPersonnellesPage,
  AccessibilitePage,
  TerritoirePage,
});
