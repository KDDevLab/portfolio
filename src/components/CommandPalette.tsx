import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../lang/context';
import { person, projects, sections } from '../content';
import { copyEmail, PALETTE_EVENT } from '../lib/ui';

interface Command {
  id: string;
  group: string;
  icon: string;
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
}

const external = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

function CommandPalette() {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  const de = lang === 'de';

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const show = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      openRef.current = true;
      setQuery('');
      setActive(0);
      setOpen(true);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey) && !e.repeat) {
        e.preventDefault();
        if (openRef.current) {
          openRef.current = false;
          setOpen(false);
          returnFocus.current?.focus?.();
        } else {
          show();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener(PALETTE_EVENT, show);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(PALETTE_EVENT, show);
    };
  }, []);

  // Während die Palette offen ist: Seite sperren, Hintergrund inert
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const behind = document.querySelectorAll<HTMLElement>('body > #root > :not(.palette)');
    behind.forEach(el => (el.inert = true));
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      behind.forEach(el => (el.inert = false));
      document.body.style.overflow = prev;
    };
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const proj = de ? 'Projekte' : 'Projects';
    const act = de ? 'Aktionen' : 'Actions';
    return [
      ...sections.map(s => ({
        id: `goto-${s.id}`,
        group: 'Navigation',
        icon: '#',
        label: s[lang],
        hint: de ? 'Springen' : 'Jump',
        run: () => navigate({ pathname: '/', hash: `#${s.id}` }),
      })),
      ...projects.map(p => ({
        id: `proj-${p.slug}`,
        group: proj,
        icon: '↗',
        label: p.title[lang],
        hint: p.tech.slice(0, 2).join(' · '),
        keywords: `${p.tech.join(' ')} ${p.category[lang]} github`,
        run: () => external(p.github),
      })),
      {
        id: 'copy-mail',
        group: act,
        icon: '@',
        label: de ? 'E-Mail-Adresse kopieren' : 'Copy email address',
        hint: person.email,
        keywords: 'mail kontakt contact',
        run: () => void copyEmail(lang),
      },
      {
        id: 'write-mail',
        group: act,
        icon: '✉',
        label: de ? 'E-Mail schreiben' : 'Write an email',
        keywords: 'mail kontakt contact hire einstellen',
        run: () => {
          window.location.href = `mailto:${person.email}`;
        },
      },
      { id: 'linkedin', group: act, icon: 'in', label: 'LinkedIn', run: () => external(person.linkedin) },
      { id: 'github', group: act, icon: 'gh', label: 'GitHub', run: () => external(person.github) },
      {
        id: 'lang',
        group: act,
        icon: 'Aa',
        label: de ? 'Switch to English' : 'Auf Deutsch wechseln',
        keywords: 'sprache language deutsch english',
        run: () => setLang(de ? 'en' : 'de'),
      },
      { id: 'impressum', group: de ? 'Rechtliches' : 'Legal', icon: '§', label: 'Impressum', run: () => navigate('/impressum') },
      { id: 'datenschutz', group: de ? 'Rechtliches' : 'Legal', icon: '§', label: 'Datenschutz', run: () => navigate('/datenschutz') },
    ];
  }, [lang, de, navigate, setLang]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(c =>
      `${c.label} ${c.group} ${c.hint ?? ''} ${c.keywords ?? ''}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  const groups = useMemo(() => {
    const map = new Map<string, { cmd: Command; index: number }[]>();
    results.forEach((cmd, index) => {
      if (!map.has(cmd.group)) map.set(cmd.group, []);
      map.get(cmd.group)!.push({ cmd, index });
    });
    return [...map];
  }, [results]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const close = () => {
    openRef.current = false;
    setOpen(false);
    returnFocus.current?.focus?.();
  };

  const run = (c: Command | undefined) => {
    if (!c) return;
    close();
    c.run();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const n = Math.max(results.length, 1);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(i => (i + 1) % n);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(i => (i - 1 + n) % n);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(results[active]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <div className="palette" onMouseDown={e => e.target === e.currentTarget && close()}>
      <div
        className="palette__box"
        role="dialog"
        aria-modal="true"
        aria-label={de ? 'Schnellzugriff' : 'Quick access'}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          className="palette__input"
          placeholder={de ? 'Wohin möchtest du? Suche nach Projekten, Aktionen …' : 'Where to? Search projects, actions …'}
          aria-label={de ? 'Befehl suchen' : 'Search commands'}
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setActive(0);
          }}
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
        />
        <div
          ref={listRef}
          id="palette-list"
          className="palette__list"
          role="listbox"
          onMouseDown={e => e.preventDefault()}
        >
          {results.length === 0 && (
            <p className="palette__empty">{de ? 'Nichts gefunden.' : 'Nothing found.'}</p>
          )}
          {groups.map(([group, items], g) => (
              <div key={group} role="group" aria-labelledby={`palette-group-${g}`}>
                <p id={`palette-group-${g}`} className="palette__group mono">{group}</p>
                {items.map(({ cmd, index }) => (
                  <button
                    key={cmd.id}
                    type="button"
                    id={`cmd-${cmd.id}`}
                    data-index={index}
                    role="option"
                    aria-selected={index === active}
                    className="palette__item"
                    onMouseMove={() => setActive(index)}
                    onClick={() => run(cmd)}
                    tabIndex={-1}
                  >
                    <span className="palette__icon" aria-hidden="true">{cmd.icon}</span>
                    <span className="palette__label">{cmd.label}</span>
                    {cmd.hint && <span className="palette__hint">{cmd.hint}</span>}
                  </button>
                ))}
              </div>
          ))}
        </div>
        <div className="palette__foot" aria-hidden="true">
          <span><kbd>↑</kbd> <kbd>↓</kbd> {de ? 'wählen' : 'select'}</span>
          <span><kbd>↵</kbd> {de ? 'öffnen' : 'open'}</span>
          <span><kbd>esc</kbd> {de ? 'schließen' : 'close'}</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
