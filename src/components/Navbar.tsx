import React from 'react';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage = location.pathname === '/impressum' || location.pathname === '/datenschutz';

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        bgcolor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '80px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <h1 className="text-2xl font-light text-gray-100 tracking-tight">
              Kürsat´s Portfolio
            </h1>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {isLegalPage ? (
              <Button
                startIcon={<Home />}
                onClick={() => navigate('/')}
                sx={{
                  color: 'text.secondary',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(25, 118, 210, 0.04)'
                  }
                }}
              >
                Home
              </Button>
            ) : (
              [
                { label: 'Über mich', id: 'about' },
                { label: 'Werdegang', id: 'education' },
                { label: 'Projekte', id: 'projects' },
                { label: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 300,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(25, 118, 210, 0.04)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;