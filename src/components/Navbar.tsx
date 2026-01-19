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
    setMobileOpen(false); // Close drawer after navigation
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
        width: 280,
        height: '100%',
        bgcolor: 'rgba(15, 23, 42, 0.98)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 className="text-lg font-light text-gray-100">Menü</h2>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ color: 'grey.400' }}
        >
          <Close />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {isLegalPage ? (
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => {
                navigate('/');
                setMobileOpen(false);
              }}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgba(96, 165, 250, 0.1)',
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                }
              }}
            >
              <Home sx={{ mr: 2, color: 'primary.main' }} />
              <ListItemText 
                primary="Startseite" 
                primaryTypographyProps={{
                  fontWeight: 400,
                  color: 'grey.300'
                }}
              />
            </ListItemButton>
          </ListItem>
        ) : (
          menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    bgcolor: 'rgba(96, 165, 250, 0.1)',
                    borderLeft: '3px solid',
                    borderColor: 'primary.main',
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontWeight: 400,
                    color: 'grey.300'
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
          bgcolor: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: '64px', md: '80px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <h1 className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 tracking-tight">
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
                  Startseite
                </Button>
              ) : (
                menuItems.map((item) => (
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