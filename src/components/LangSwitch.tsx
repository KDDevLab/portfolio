import { useLang } from '../lang/context';

function LangSwitch() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang" role="group" aria-label="Sprache / Language">
      <button type="button" aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}

export default LangSwitch;
