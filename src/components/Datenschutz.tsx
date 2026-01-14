import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

function Datenschutz() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 8,
        px: 2
      }}
    >
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => window.history.back()}
          sx={{
            mb: 4,
            color: 'primary.main',
            textTransform: 'none',
            fontWeight: 500
          }}
        >
          Zurück
        </Button>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 300,
            color: 'white',
            mb: 4
          }}
        >
          Datenschutzerklärung
        </Typography>

        <Box sx={{ color: 'grey.300', '& p': { mb: 2, lineHeight: 1.8 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            1. Datenschutz auf einen Blick
          </Typography>
          
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
            Allgemeine Hinweise
          </Typography>
          <Typography variant="body2">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            2. Allgemeine Hinweise und Pflichtinformationen
          </Typography>
          
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
            Datenschutz
          </Typography>
          <Typography variant="body2">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </Typography>

          <Typography variant="body2">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
            Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung 
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck 
            das geschieht.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
            Hinweis zur verantwortlichen Stelle
          </Typography>
          <Typography variant="body2">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </Typography>
          <Typography variant="body2">
            Kürsat Darcan<br />
            47445 Moers<br />
            Deutschland<br />
            <br />
            E-Mail: Darcankursat@gmail.com
          </Typography>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
            über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) 
            entscheidet.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            3. Datenerfassung auf dieser Website
          </Typography>
          
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
            Server-Log-Dateien
          </Typography>
          <Typography variant="body2">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </Typography>
          <Typography variant="body2" component="div">
            <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </Typography>
          <Typography variant="body2">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
            Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes 
            Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die 
            Server-Log-Files erfasst werden.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
            Datenerfassung auf dieser Website
          </Typography>
          <Typography variant="body2">
            Diese Website ist ein reines Portfolio ohne Kontaktformular oder Login-Funktionen. Es werden keine 
            personenbezogenen Daten aktiv durch Formulare oder andere Eingabefelder erfasst. Die auf der Website 
            angezeigten Kontaktdaten dienen lediglich der Kontaktaufnahme über externe Kanäle (E-Mail, Telefon, 
            LinkedIn, GitHub).
          </Typography>

          <Typography variant="body2">
            Es erfolgt keine aktive Speicherung oder Verarbeitung von personenbezogenen Daten über die automatisch 
            erfassten Server-Log-Dateien hinaus. Es werden keine Cookies gesetzt und keine Tracking-Tools oder 
            Analyse-Software eingesetzt.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            4. Ihre Rechte
          </Typography>
          
          <Typography variant="body2">
            Sie haben jederzeit das Recht:
          </Typography>
          <Typography variant="body2" component="div">
            <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit zu widerrufen</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            5. Hosting
          </Typography>
          
          <Typography variant="body2">
            Diese Website wird gehostet bei:
          </Typography>
          <Typography variant="body2">
            netcup GmbH<br />
            Daimlerstraße 25<br />
            76185 Karlsruhe<br />
            Deutschland
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten 
            Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Weitere Informationen zur Datenverarbeitung durch netcup finden Sie in der Datenschutzerklärung von netcup: 
            https://www.netcup.de/kontakt/datenschutzerklaerung.php
          </Typography>

          <Typography variant="body2" sx={{ mt: 4, fontSize: '0.875rem', color: 'grey.500' }}>
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Datenschutz;
