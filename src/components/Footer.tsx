import { Box, Container, Typography, Link, Stack} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        color: 'text.secondary',
        py: 5,
        borderTop: '2px solid rgba(96, 165, 250, 0.2)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.2)'
      }}
    >
      <Container maxWidth="xl">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={3}
        >
          <Stack direction="column" alignItems={{ xs: 'center', md: 'flex-start' }} spacing={1}>
            <Typography 
              sx={{ 
                fontWeight: 700, 
                fontSize: '1.1rem', 
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kürsat Darcan, B.Sc.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '0.9rem', color: 'grey.400' }}>
              © {new Date().getFullYear()} Alle Rechte vorbehalten
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Link
              component={RouterLink}
              to="/datenschutz"
              underline="hover"
              sx={{
                color: 'grey.400',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Datenschutz
            </Link>
            <Link
              component={RouterLink}
              to="/impressum"
              underline="hover"
              sx={{
                color: 'grey.400',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Impressum
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;