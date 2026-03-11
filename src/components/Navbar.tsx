import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Container, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider 
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Menu as MenuIcon, Close } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage = location.pathname === '/impressum' || location.pathname === '/datenschutz';
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Profil', id: 'about' },
    { label: 'Werdegang', id: 'education' },
    { label: 'Projekte', id: 'projects' },
    { label: 'Kontakt', id: 'contact' }
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 300,
        height: '100%',
        bgcolor: 'rgba(15, 23, 42, 0.98)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 3,
        borderBottom: '1px solid rgba(96, 165, 250, 0.2)'
      }}>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Menü</h2>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'grey.300',
            '&:hover': {
              bgcolor: 'rgba(96, 165, 250, 0.1)',
            }
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <List sx={{ pt: 2, px: 2 }}>
        {isLegalPage ? (
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => {
                navigate('/');
                setMobileOpen(false);
              }}
              sx={{
                py: 2,
                px: 3,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(96, 165, 250, 0.15)',
                  transform: 'translateX(8px)',
                }
              }}
            >
              <Home sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
              <ListItemText 
                primary="Startseite" 
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: 'grey.200',
                  fontSize: '1.05rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ) : (
          menuItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 2,
                  px: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(96, 165, 250, 0.15)',
                    transform: 'translateX(8px)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: 'grey.200',
                    fontSize: '1.05rem'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
      <Box sx={{ px: 3, py: 2 }}>
        <p className="text-xs text-gray-500 font-light">
          Kürsat Darcan, B.Sc.
          <br />
          Junior Softwareentwickler
        </p>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(96, 165, 250, 0.2)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: '64px', md: '80px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <h1 style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px'
              }}>
                Kürsat Darcan, B.Sc.
              </h1>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {isLegalPage ? (
                <Button
                  startIcon={<Home />}
                  onClick={() => navigate('/')}
                  sx={{
                    color: 'grey.300',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(96, 165, 250, 0.15)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Startseite
                </Button>
              ) : (
                menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: 'grey.300',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textTransform: 'none',
                      px: 3,
                      py: 1.2,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'rgba(96, 165, 250, 0.15)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))
              )}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: 'grey.300',
                '&:hover': {
                  bgcolor: 'rgba(96, 165, 250, 0.1)',
                  color: 'primary.main'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            bgcolor: 'transparent',
            border: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;