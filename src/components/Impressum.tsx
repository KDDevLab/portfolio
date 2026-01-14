import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

function Impressum() {
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
          Impressum
        </Typography>

        <Box sx={{ color: 'grey.300', '& p': { mb: 2, lineHeight: 1.8 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            Angaben gemäß § 5 TMG
          </Typography>
          
          <Typography variant="body1">
            Kürsat Darcan<br />
            47445 Moers<br />
            Deutschland
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            Kontakt
          </Typography>
          
          <Typography variant="body1">
            E-Mail: Darcankursat@gmail.com
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            Haftung für Inhalte
          </Typography>
          
          <Typography variant="body2">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </Typography>

          <Typography variant="body2">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            Haftung für Links
          </Typography>
          
          <Typography variant="body2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </Typography>

          <Typography variant="body2">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
            Links umgehend entfernen.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2, mt: 4 }}>
            Urheberrecht
          </Typography>
          
          <Typography variant="body2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </Typography>

          <Typography variant="body2">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Impressum;
