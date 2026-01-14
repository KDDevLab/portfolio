import React from 'react';
import { Button, Card, CardContent, Typography, Container, Box, Chip, Stack, Fade, Zoom } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Email, LinkedIn, GitHub, ArrowForward, Code, School, WorkOutline } from '@mui/icons-material';

function Main() {
  return (
    <div className="w-full">
      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 py-20 px-4">
        <Container maxWidth="xl">
          <Fade in timeout={1000}>
            <Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                <Box>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 300,
                      color: 'white',
                      mb: 3,
                      lineHeight: 1.2
                    }}
                  >
                    Hi, ich bin <span style={{ color: '#60a5fa', fontWeight: 400 }}>Kürsat Darcan</span>
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 300,
                      color: 'grey.400',
                      mb: 2,
                      lineHeight: 1.6
                    }}
                  >
                    Junior Softwareentwickler & Wirtschaftsinformatiker
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 300,
                      color: 'grey.500',
                      mb: 4,
                      lineHeight: 1.8
                    }}
                  >
                    Ich bin Berufseinsteiger mit abgeschlossenem Studium der Wirtschaftsinformatik mit Schwerpunkt Software Engineering. 
                    Als Junior Softwareentwickler habe ich Freude daran, mich neuen Herausforderungen zu stellen, Verantwortung zu 
                    übernehmen und kontinuierlich dazuzulernen.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 300,
                      color: 'grey.500',
                      mb: 4,
                      lineHeight: 1.8
                    }}
                  >
                    Während meines dualen Studiums an der FHDW Mettmann konnte ich bereits praktische Erfahrung in der professionellen 
                    Softwareentwicklung sammeln. Von 2022 bis 2025 war ich bei Hyand Solutions GmbH tätig und entwickelte 
                    Softwarelösungen mit Oracle APEX, PL/SQL und modernen Webtechnologien.
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1.5 }}>
                    <Chip 
                      label="Oracle APEX / Oracle DB / PL/SQL - Fortgeschritten" 
                      sx={{ 
                        bgcolor: 'rgba(96, 165, 250, 0.15)',
                        color: 'primary.light',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        fontWeight: 500
                      }} 
                    />
                    <Chip 
                      label="HTML / CSS - Grundlagen" 
                      sx={{ 
                        bgcolor: 'rgba(96, 165, 250, 0.15)',
                        color: 'primary.light',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        fontWeight: 500
                      }} 
                    />
                    <Chip 
                      label="Java - Grundlagen" 
                      sx={{ 
                        bgcolor: 'rgba(96, 165, 250, 0.15)',
                        color: 'primary.light',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        fontWeight: 500
                      }} 
                    />
                    <Chip 
                      label="JavaScript - Grundlagen" 
                      sx={{ 
                        bgcolor: 'rgba(96, 165, 250, 0.15)',
                        color: 'primary.light',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        fontWeight: 500
                      }} 
                    />
                    <Chip 
                      label="GitHub - Grundlagen" 
                      sx={{ 
                        bgcolor: 'rgba(96, 165, 250, 0.15)',
                        color: 'primary.light',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        fontWeight: 500
                      }} 
                    />
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                    <Button 
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{ 
                        textTransform: 'none',
                        fontWeight: 500,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2
                      }}
                    >
                      Projekte ansehen
                    </Button>
                    <Button 
                      variant="outlined"
                      size="large"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{ 
                        textTransform: 'none',
                        fontWeight: 500,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        borderWidth: 2,
                        '&:hover': { borderWidth: 2 }
                      }}
                    >
                      Kontakt
                    </Button>
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      width: 320,
                      height: 320,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
                      animation: 'float 3s ease-in-out infinite',
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' }
                      }
                    }}
                  >
                    <Code sx={{ fontSize: 120, color: 'white' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>
      </section>

      {/* Education & Career Section - Timeline */}
      <section id="education" className="min-h-screen flex items-center justify-center bg-slate-900 py-20 px-4">
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 300,
                  textAlign: 'center',
                  mb: 8,
                  color: 'white'
                }}
              >
                Mein Werdegang
              </Typography>
              
              <Timeline position="alternate">
                {/* Item 1 - Anne-Frank-Gesamtschule */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: 'primary.light',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    06.2013 - 06.2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'primary.main', height: 40 }} />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: 'primary.main',
                        boxShadow: '0 0 20px rgba(96, 165, 250, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #60a5fa, #10b981)',
                        height: 80
                      }} 
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={800}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(96, 165, 250, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(96, 165, 250, 0.4)',
                            borderColor: 'rgba(96, 165, 250, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <School sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                Anne-Frank-Gesamtschule Rheinkamp
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                Realschulabschluss
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card> 
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>

                {/* Item 2 - My Mediamen Praktikum */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: '#10b981',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    12.2017
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #60a5fa, #10b981)',
                        height: 80
                      }} 
                    />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: '#10b981',
                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #10b981, #a78bfa)',
                        height: 80
                      }} 
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={1000}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
                            borderColor: 'rgba(16, 185, 129, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <Code sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                My Mediamen
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                <strong style={{ color: '#10b981' }}>Praktikum</strong> - Telekommunikation Technik<br />
                                Erste Einblicke in die Telekommunikationsbranche und technische Systeme.
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>

                {/* Item 3 - Berufskolleg */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: 'secondary.light',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    08.2019 - 06.2022
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #10b981, #a78bfa)',
                        height: 80
                      }} 
                    />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: 'secondary.main',
                        boxShadow: '0 0 20px rgba(167, 139, 250, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #a78bfa, #fbbf24)',
                        height: 80
                      }} 
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={1200}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(167, 139, 250, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(167, 139, 250, 0.4)',
                            borderColor: 'rgba(167, 139, 250, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <School sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                Berufskolleg für Technik Moers
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                Fachabitur + Berufsabschluss nach Landesrecht NRW als Informationstechnische Assistent. 
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>

                {/* Item 4 - Praktika & Erste Berufserfahrung */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: '#fbbf24',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    06.2021 - 09.2021
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #10b981, #fbbf24)',
                        height: 80
                      }} 
                    />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: '#fbbf24',
                        boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #fbbf24, #06b6d4)',
                        height: 80
                      }} 
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={1400}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(251, 191, 36, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4)',
                            borderColor: 'rgba(251, 191, 36, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <Code sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                Erste Praxiserfahrungen
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6, mb: 1 }}>
                                <strong style={{ color: '#fbbf24' }}>Curv UG</strong> - Praktikum als Anwendungsentwickler<br />
                                • Entwicklung mit Vue.js Framework
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6, mb: 1 }}>
                                <strong style={{ color: '#fbbf24' }}>Euroweb</strong> - Projektwoche durch BKTM, Web-Design Entwickler<br />
                                • Webentwicklung mit HTML & CSS
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                Sammeln erster praktischer Erfahrungen in der Webentwicklung und modernen JavaScript-Frameworks.
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>

                {/* Item 5 - Deutsche Post AG Minijob */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: '#06b6d4',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    06.2022 - 05.2025
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #fbbf24, #06b6d4)',
                        height: 80
                      }} 
                    />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: '#06b6d4',
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #06b6d4, #ec4899)',
                        height: 80
                      }} 
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={1600}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(6, 182, 212, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(6, 182, 212, 0.4)',
                            borderColor: 'rgba(6, 182, 212, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <WorkOutline sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                Deutsche Post AG
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                <strong style={{ color: '#06b6d4' }}>Aushilfe / Lagerhilfe</strong><br />
                                Neben dem Studium im Lager gearbeitet.
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>

                {/* Item 6 - Duales Studium & Berufseinstieg */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: '#ec4899',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    09.2022 - 09.2025
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #06b6d4, #ec4899)',
                        height: 80
                      }} 
                    />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: '#ec4899',
                        boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #ec4899, #f97316)',
                        height: 80
                      }} 
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={1800}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(236, 72, 153, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(236, 72, 153, 0.4)',
                            borderColor: 'rgba(236, 72, 153, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <WorkOutline sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                FHDW Mettmann & Hyand Solutions GmbH
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6, mb: 1 }}>
                                <strong style={{ color: '#ec4899' }}>Dualer Student (Bachelor)</strong> - Wirtschaftsinformatik Software Engineering | Abschlussnote: 2,5
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6, mb: 2 }}>
                                <strong style={{ color: '#ec4899' }}>Junior Berater</strong> bei Hyand Solutions GmbH
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                • Entwicklung von APEX-Anwendungen<br />
                                • PL/SQL Entwicklung & Datenmodellierung<br />
                                • Konzeption von Webanwendungen<br />
                                • Praxisnahe Verbindung von Studium und professioneller Softwareentwicklung
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>

                {/* Item 7 - Taxi Minijob (Übergang) */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: '#f97316',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    09.2025 - Heute
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector 
                      sx={{ 
                        background: 'linear-gradient(to bottom, #ec4899, #f97316)',
                        height: 80
                      }} 
                    />
                    <TimelineDot 
                      sx={{ 
                        bgcolor: '#f97316',
                        boxShadow: '0 0 20px rgba(249, 115, 22, 0.8)',
                        width: 20,
                        height: 20
                      }}
                    />
                    <TimelineConnector sx={{ bgcolor: '#f97316', height: 40 }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Zoom in timeout={2000}>
                      <Card
                        sx={{
                          bgcolor: 'rgba(30, 41, 59, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(249, 115, 22, 0.3)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)',
                            borderColor: 'rgba(249, 115, 22, 0.6)'
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'rotate(10deg) scale(1.1)'
                                }
                              }}
                            >
                              <WorkOutline sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                                Taxifahrer (Minijob)
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 300, lineHeight: 1.6 }}>
                                Übergangsphase
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
          </Fade>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-blue-950 py-20 px-4">
        <Container maxWidth="xl">
          <Fade in timeout={1000}>
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 300,
                  textAlign: 'center',
                  mb: 8,
                  color: 'white'
                }}
              >
                Meine Projekte
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
                {[
                  {
                    title: 'Time2Meet',
                    description: 'Gruppen-Planer für gemeinsame Aktivitäten. Entwickelt im Rahmen der Module Software Testing & DevOps sowie Software Engineering Projects.',
                    tech: ['Next.js', 'TypeScript', 'Cypress'],
                    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#667eea',
                    role: 'Full-Stack Development & Projektmanagement',
                    github: 'https://github.com/SEPMFWS422A/time2meet'
                  },
                  {
                    title: 'Algorithmischer Handel',
                    description: 'Machine Learning Projekt zur Vorhersage von Aktienkursen mit technischen Indikatoren und Rohdaten. Entwickelt für Data Analysis and Machine Learning.',
                    tech: ['Python', 'Machine Learning', 'Jupyter'],
                    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: '#f093fb',
                    role: 'Data Analysis & ML-Modellierung',
                    github: 'https://github.com/KD-Studies/Algorithmischer-Handel'
                  }
                ].map((project, index) => (
                  <Zoom in timeout={800 + index * 200} key={index}>
                    <Card 
                      elevation={0}
                      sx={{ 
                        bgcolor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 4,
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: project.gradient,
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:hover': {
                          transform: 'translateY(-12px) scale(1.02)',
                          boxShadow: `0 20px 60px ${project.color}40`,
                          borderColor: `${project.color}60`,
                          '&::before': {
                            opacity: 1
                          }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          height: 180,
                          background: project.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            top: '-50%',
                            left: '-50%',
                            animation: 'rotate 20s linear infinite'
                          },
                          '@keyframes rotate': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' }
                          }
                        }}
                      >
                        <Code 
                          sx={{ 
                            fontSize: 80, 
                            color: 'white', 
                            opacity: 0.9,
                            position: 'relative',
                            zIndex: 1,
                            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                          }} 
                        />
                      </Box>
                      <CardContent sx={{ p: 4 }}>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 600, 
                            mb: 2,
                            color: 'white',
                            background: project.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'grey.400', 
                            mb: 3, 
                            fontWeight: 300, 
                            lineHeight: 1.7,
                            minHeight: 60
                          }}
                        >
                          {project.description}
                        </Typography>
                        {project.role && (
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: project.color,
                              fontWeight: 600,
                              mb: 2,
                              display: 'block'
                            }}
                          >
                            Rolle: {project.role}
                          </Typography>
                        )}
                        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                          {project.tech.map((tech) => (
                            <Chip 
                              key={tech}
                              label={tech} 
                              size="small" 
                              sx={{ 
                                bgcolor: `${project.color}20`,
                                color: project.color,
                                fontWeight: 600,
                                border: `1px solid ${project.color}40`,
                                fontSize: '0.75rem',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  bgcolor: `${project.color}30`,
                                  transform: 'translateY(-2px)'
                                }
                              }} 
                            />
                          ))}
                        </Stack>
                        <Button 
                          endIcon={<ArrowForward />}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            textTransform: 'none',
                            fontWeight: 600,
                            color: project.color,
                            p: 0,
                            '&:hover': { 
                              bgcolor: 'transparent',
                              transform: 'translateX(4px)'
                            },
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          Auf GitHub ansehen
                        </Button>
                      </CardContent>
                    </Card>
                  </Zoom>
                ))}
              </Box>
            </Box>
          </Fade>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-slate-900 py-20 px-4">
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 300,
                mb: 3,
                color: 'text.primary'
              }}
            >
              Lass uns reden
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 300,
                color: 'text.secondary',
                mb: 6,
                lineHeight: 1.6
              }}
            >
              Interessiert an einer Zusammenarbeit? Ich freue mich auf deine Nachricht!
            </Typography>
            
            <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 6 }}>
              <Button
                variant="outlined"
                startIcon={<Email />}
                href="mailto:Darcankursat@gmail.com"
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                Email
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/kursat-darcan"
                target="_blank"
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                href="https://github.com/DKursat"
                target="_blank"
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                GitHub
              </Button>
            </Stack>

          </Box>
        </Container>
      </section>
    </div>
  );
}

export default Main;