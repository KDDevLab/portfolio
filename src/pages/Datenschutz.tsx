import { person } from '../content';

function Datenschutz() {
  return (
    <main className="legal frame">
      <h1 className="legal__title">Datenschutz</h1>

      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

      <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3>Datenschutz</h3>
      <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
      <h3>Hinweis zur verantwortlichen Stelle</h3>
      <p>
        {person.name}<br />
        47445 Moers, Deutschland<br />
        E-Mail: <a href={`mailto:${person.email}`}>{person.email}</a>
      </p>

      <h2>3. Datenerfassung auf dieser Website</h2>
      <h3>Server-Log-Dateien</h3>
      <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt:</p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <h3>Keine aktive Datenerfassung</h3>
      <p>Diese Website ist ein reines Portfolio ohne Kontaktformular oder Login-Funktionen. Es werden keine personenbezogenen Daten aktiv erfasst und keine Cookies gesetzt.</p>
      <h3>Webanalyse mit Umami</h3>
      <p>Zur statistischen Auswertung der Besucherzugriffe nutze ich Umami, ein datenschutzfreundliches Open-Source-Analysewerkzeug. Umami setzt keine Cookies und erstellt keine personenbezogenen Nutzerprofile. Erfasst werden anonymisierte Nutzungsdaten wie aufgerufene Seiten, Referrer, Browser, Betriebssystem, Gerätetyp und Land. IP-Adressen werden nicht gespeichert.</p>
      <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in der anonymen Analyse des Nutzerverhaltens, um das Angebot zu verbessern.</p>
      <h3>Lokale Speicherung der Spracheinstellung</h3>
      <p>Die gewählte Sprache (Deutsch/Englisch) wird ausschließlich lokal im Speicher Ihres Browsers (localStorage) abgelegt und nicht an mich übertragen. Sie können diese Angabe jederzeit über die Einstellungen Ihres Browsers löschen.</p>
      <h3>Schriftarten</h3>
      <p>Alle Schriftarten werden lokal von diesem Server ausgeliefert. Es findet keine Verbindung zu Servern Dritter (z. B. Google Fonts) statt.</p>

      <h2>4. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit gemäß Art. 15 bis 20 DSGVO. Zudem können Sie eine erteilte Einwilligung jederzeit widerrufen (Art. 7 Abs. 3 DSGVO) und sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO).</p>

      <h2>5. Hosting</h2>
      <p>
        Diese Website wird gehostet bei:<br /><br />
        <strong>netcup GmbH</strong><br />
        Daimlerstraße 25, 76185 Karlsruhe, Deutschland
      </p>
      <p>Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO. Weitere Informationen: <a href="https://www.netcup.de/kontakt/datenschutzerklaerung.php" target="_blank" rel="noopener noreferrer">netcup Datenschutzerklärung</a></p>

      <p className="legal__stand">
        Stand: November 2026
      </p>
    </main>
  );
}

export default Datenschutz;
