import { Box, Container, Typography, Link, Stack} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Container maxWidth="xl">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" sx={{ fontWeight: 300, fontSize: '0.8rem', color: 'grey.500' }}>
              © {new Date().getFullYear()} Kürsat Darcan
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Link
              component={RouterLink}
              to="/datenschutz"
              underline="hover"
              sx={{
                color: 'grey.500',
                fontWeight: 300,
                fontSize: '0.8rem',
                cursor: 'pointer',
                '&:hover': {
                  color: 'grey.300'
                },
                transition: 'color 0.2s'
              }}
            >
              Datenschutz
            </Link>
            <Link
              component={RouterLink}
              to="/impressum"
              underline="hover"
              sx={{
                color: 'grey.500',
                fontWeight: 300,
                fontSize: '0.8rem',
                cursor: 'pointer',
                '&:hover': {
                  color: 'grey.300'
                },
                transition: 'color 0.2s'
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