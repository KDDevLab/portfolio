import {Button, Card, CardContent, Typography, Container, Box, Chip, Stack, Fade, Zoom, useMediaQuery, useTheme, } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {Email, LinkedIn, GitHub, ArrowForward, Code, School, WorkOutline,} from "@mui/icons-material";

function Main() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="w-full">
      {/* Hero Section - Komplett neu */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32 pb-20 px-4"
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
              top: '-10%',
              right: '-5%',
              animation: 'float 8s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                '50%': { transform: 'translate(-30px, 30px) scale(1.1)' },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
              bottom: '10%',
              left: '5%',
              animation: 'float 10s ease-in-out infinite reverse',
            }}
          />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        fontWeight: 500,
                        color: "primary.main",
                        mb: 2,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Willkommen in meinem Portfolio
                    </Typography>
                  </Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3rem", md: "4.5rem", lg: "5rem" },
                      fontWeight: 700,
                      color: "white",
                      mb: 3,
                      lineHeight: 1.1,
                      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Kürsat Darcan
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
                      fontWeight: 400,
                      color: "grey.300",
                      mb: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    Junior Softwareentwickler | Bachelor of Science
                    (Wirtschaftsinformatik)
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'rgba(96, 165, 250, 0.05)',
                      border: '1px solid rgba(96, 165, 250, 0.2)',
                      borderRadius: 3,
                      p: 3,
                      mb: 4,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 400,
                        color: "grey.300",
                        mb: 2,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                      }}
                    >
                      Qualifizierter Absolvent mit abgeschlossenem Bachelorstudium
                      der Wirtschaftsinformatik mit Schwerpunkt Software
                      Engineering. Die berufliche Tätigkeit ist gekennzeichnet
                      durch ausgeprägte Leistungsbereitschaft, hohes
                      Verantwortungsbewusstsein sowie das Bestreben nach
                      kontinuierlicher fachlicher Weiterentwicklung.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 400,
                        color: "grey.300",
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                      }}
                    >
                      Im Rahmen des dualen Studiums an der Fachhochschule der
                      Wirtschaft (FHDW) Mettmann wurden fundierte praktische
                      Kenntnisse in der professionellen Softwareentwicklung
                      erworben. Der Zeitraum von 2022 bis 2025 war durch die
                      Tätigkeit bei der Hyand Solutions GmbH geprägt, mit
                      Schwerpunkt auf der Entwicklung von Softwarelösungen unter
                      Verwendung von Oracle APEX, PL/SQL sowie modernen
                      Webtechnologien.
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ mb: 4, flexWrap: "wrap", gap: 1.5 }}
                  >
                    {[
                      { label: "Oracle APEX / Oracle DB / PL/SQL", level: "Fortgeschritten", color: "#3b82f6" },
                      { label: "HTML / CSS", level: "Grundlagen", color: "#10b981" },
                      { label: "Java", level: "Grundlagen", color: "#f59e0b" },
                      { label: "JavaScript", level: "Grundlagen", color: "#8b5cf6" },
                      { label: "GitHub", level: "Grundlagen", color: "#ec4899" },
                    ].map((skill, index) => (
                      <Chip
                        key={index}
                        label={`${skill.label} - ${skill.level}`}
                        sx={{
                          bgcolor: `${skill.color}15`,
                          color: skill.color,
                          border: `1.5px solid ${skill.color}50`,
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", sm: "0.85rem" },
                          py: 2.5,
                          px: 0.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: `${skill.color}25`,
                            transform: 'translateY(-3px)',
                            boxShadow: `0 8px 20px ${skill.color}40`,
                          },
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ flexWrap: "wrap", gap: 2 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() =>
                        document
                          .getElementById("education")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        px: { xs: 4, sm: 5 },
                        py: 1.8,
                        borderRadius: 3,
                        borderWidth: 2,
                        fontSize: { xs: "0.95rem", sm: "1.05rem" },
                        width: { xs: "100%", sm: "auto" },
                        borderColor: '#60a5fa',
                        color: '#60a5fa',
                        transition: 'all 0.3s ease',
                        "&:hover": {
                          borderWidth: 2,
                          transform: 'translateY(-3px)',
                          bgcolor: 'rgba(96, 165, 250, 0.1)',
                          boxShadow: '0 8px 24px rgba(96, 165, 250, 0.4)',
                        },
                      }}
                    >
                      Werdegang
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() =>
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        px: { xs: 4, sm: 5 },
                        py: 1.8,
                        borderRadius: 3,
                        borderWidth: 2,
                        fontSize: { xs: "0.95rem", sm: "1.05rem" },
                        width: { xs: "100%", sm: "auto" },
                        borderColor: '#10b981',
                        color: '#10b981',
                        transition: 'all 0.3s ease',
                        "&:hover": {
                          borderWidth: 2,
                          transform: 'translateY(-3px)',
                          bgcolor: 'rgba(16, 185, 129, 0.1)',
                          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
                        },
                      }}
                    >
                      Projektübersicht
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        px: { xs: 4, sm: 5 },
                        py: 1.8,
                        borderRadius: 3,
                        borderWidth: 2,
                        fontSize: { xs: "0.95rem", sm: "1.05rem" },
                        width: { xs: "100%", sm: "auto" },
                        borderColor: '#a78bfa',
                        color: '#a78bfa',
                        transition: 'all 0.3s ease',
                        "&:hover": {
                          borderWidth: 2,
                          transform: 'translateY(-3px)',
                          bgcolor: 'rgba(167, 139, 250, 0.1)',
                          boxShadow: '0 8px 24px rgba(167, 139, 250, 0.4)',
                        },
                      }}
                    >
                      Kontaktaufnahme
                    </Button>
                  </Stack>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 400,
                      height: 400,
                    }}
                  >
                    {/* Outer rotating ring */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: 'primary.main',
                        opacity: 0.3,
                        animation: 'rotate 20s linear infinite',
                        '@keyframes rotate': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' },
                        },
                      }}
                    />
                    {/* Middle ring */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '80%',
                        height: '80%',
                        borderRadius: '50%',
                        border: '2px dashed',
                        borderColor: 'secondary.main',
                        opacity: 0.3,
                        animation: 'rotate 15s linear infinite reverse',
                      }}
                    />
                    {/* Center gradient circle */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '20%',
                        left: '20%',
                        width: '60%',
                        height: '60%',
                        background:
                          "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 20px 60px rgba(96, 165, 250, 0.5)",
                        animation: "float 6s ease-in-out infinite",
                        "@keyframes float": {
                          "0%, 100%": { transform: "translateY(0px) scale(1)" },
                          "50%": { transform: "translateY(-20px) scale(1.05)" },
                        },
                      }}
                    >
                      <Code sx={{ fontSize: 100, color: "white", filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>
      </section>

      {/* Education & Career Section - Timeline */}
      <section
        id="education"
        className="min-h-screen flex items-center justify-center py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 2,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Mein Werdegang
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 400,
                  textAlign: "center",
                  mb: { xs: 6, md: 10 },
                  color: 'grey.400',
                }}
              >
                Von der Schule bis zur professionellen Softwareentwicklung
              </Typography>

              <Timeline position={isMobile ? "right" : "alternate"}>
                {/* Item 1 - Anne-Frank-Gesamtschule */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{
                      m: "auto 0",
                      color: "primary.light",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    06.2013 - 06.2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{ bgcolor: "primary.main", height: 40 }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "primary.main",
                        boxShadow: "0 0 20px rgba(96, 165, 250, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #60a5fa, #10b981)",
                        height: 80,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={800}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(96, 165, 250, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(96, 165, 250, 0.5)",
                            borderColor: "rgba(96, 165, 250, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(96, 165, 250, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <School sx={{ color: "white", fontSize: 32 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                Anne-Frank-Gesamtschule Rheinkamp
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
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
                      m: "auto 0",
                      color: "#10b981",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    12.2017
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #60a5fa, #10b981)",
                        height: 80,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "#10b981",
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #10b981, #a78bfa)",
                        height: 80,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={1000}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(16, 185, 129, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(16, 185, 129, 0.5)",
                            borderColor: "rgba(16, 185, 129, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <Code sx={{ color: "white", fontSize: 32 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                My Mediamen
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
                                <strong style={{ color: "#10b981" }}>
                                  Praktikum
                                </strong>{" "}
                                - Telekommunikation Technik
                                <br />
                                Erwerb grundlegender Kenntnisse in der
                                Telekommunikationsbranche und technischen
                                Systemen.
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
                      m: "auto 0",
                      color: "secondary.light",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    08.2019 - 06.2022
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #10b981, #a78bfa)",
                        height: 80,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "secondary.main",
                        boxShadow: "0 0 20px rgba(167, 139, 250, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #a78bfa, #fbbf24)",
                        height: 80,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={1200}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(167, 139, 250, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(167, 139, 250, 0.5)",
                            borderColor: "rgba(167, 139, 250, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(167, 139, 250, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <School sx={{ color: "white", fontSize: 32 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                Berufskolleg für Technik Moers
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
                                Fachabitur + Berufsabschluss nach Landesrecht
                                NRW als Informationstechnischer Assistent
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
                      m: "auto 0",
                      color: "#fbbf24",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    06.2021 - 09.2021
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #10b981, #fbbf24)",
                        height: 80,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "#fbbf24",
                        boxShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #fbbf24, #06b6d4)",
                        height: 80,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={1400}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(251, 191, 36, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(251, 191, 36, 0.5)",
                            borderColor: "rgba(251, 191, 36, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(251, 191, 36, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <Code sx={{ color: "white", fontSize: 32 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                Erste Praxiserfahrungen
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                  mb: 1,
                                }}
                              >
                                <strong style={{ color: "#fbbf24" }}>
                                  Curv UG
                                </strong>{" "}
                                - Praktikum als Anwendungsentwickler
                                <br />• Entwicklung mit Vue.js Framework
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                  mb: 1,
                                }}
                              >
                                <strong style={{ color: "#fbbf24" }}>
                                  Euroweb
                                </strong>{" "}
                                - Projektwoche durch BKTM, Web-Design Entwickler
                                <br />• Webentwicklung mit HTML & CSS
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
                                Erwerb praktischer Erfahrungen in der
                                Webentwicklung und modernen
                                JavaScript-Frameworks.
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
                      m: "auto 0",
                      color: "#06b6d4",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    06.2022 - 05.2025
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #fbbf24, #06b6d4)",
                        height: 80,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "#06b6d4",
                        boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #06b6d4, #ec4899)",
                        height: 80,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={1600}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(6, 182, 212, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(6, 182, 212, 0.5)",
                            borderColor: "rgba(6, 182, 212, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(6, 182, 212, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <WorkOutline
                                sx={{ color: "white", fontSize: 32 }}
                              />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                Deutsche Post AG
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
                                <strong style={{ color: "#06b6d4" }}>
                                  Aushilfe / Lagerhilfe
                                </strong>
                                <br />
                                Nebentätigkeit während des Studiums im Bereich
                                Lagerlogistik.
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
                      m: "auto 0",
                      color: "#ec4899",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    09.2022 - 09.2025
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #06b6d4, #ec4899)",
                        height: 80,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "#ec4899",
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #ec4899, #f97316)",
                        height: 80,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={1800}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(236, 72, 153, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(236, 72, 153, 0.5)",
                            borderColor: "rgba(236, 72, 153, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(236, 72, 153, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <WorkOutline
                                sx={{ color: "white", fontSize: 32 }}
                              />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                FHDW Mettmann & Hyand Solutions GmbH
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                  mb: 1,
                                }}
                              >
                                <strong style={{ color: "#ec4899" }}>
                                  Dualer Student (Bachelor)
                                </strong>{" "}
                                - Wirtschaftsinformatik Software Engineering |
                                Abschlussnote: 2,5
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                  mb: 2,
                                }}
                              >
                                <strong style={{ color: "#ec4899" }}>
                                  Junior Berater
                                </strong>{" "}
                                bei Hyand Solutions GmbH
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
                                • Entwicklung von Oracle APEX-Anwendungen
                                <br />
                                • PL/SQL Entwicklung & Datenmodellierung
                                <br />
                                • Konzeption von Webanwendungen
                                <br />• Praxisorientierte Verbindung von Studium
                                und professioneller Softwareentwicklung
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
                      m: "auto 0",
                      color: "#f97316",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    09.2025 - Heute
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(to bottom, #ec4899, #f97316)",
                        height: 80,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        bgcolor: "#f97316",
                        boxShadow: "0 0 20px rgba(249, 115, 22, 0.8)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <TimelineConnector
                      sx={{ bgcolor: "#f97316", height: 40 }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Zoom in timeout={2000}>
                      <Card
                        sx={{
                          bgcolor: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: "2px solid rgba(249, 115, 22, 0.3)",
                          borderRadius: 4,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px) scale(1.02)",
                            boxShadow: "0 16px 48px rgba(249, 115, 22, 0.5)",
                            borderColor: "rgba(249, 115, 22, 0.6)",
                            bgcolor: "rgba(30, 41, 59, 0.8)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                background:
                                  "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 8px 24px rgba(249, 115, 22, 0.4)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "rotate(10deg) scale(1.1)",
                                },
                              }}
                            >
                              <WorkOutline
                                sx={{ color: "white", fontSize: 32 }}
                              />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "white", mb: 1, fontSize: '1.2rem' }}
                              >
                                Taxifahrer (Minijob)
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.300",
                                  fontWeight: 400,
                                  lineHeight: 1.7,
                                }}
                              >
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
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 2,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Meine Projekte
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 400,
                  textAlign: "center",
                  mb: { xs: 6, md: 10 },
                  color: 'grey.400',
                }}
              >
                Innovative Lösungen aus Studium und Praxis
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  },
                  gap: 4,
                }}
              >
                {[
                  {
                    title: "Time2Meet",
                    description:
                      "Gruppenplanungssystem für gemeinsame Aktivitäten. Entwickelt im Rahmen der Module Software Testing & DevOps sowie Software Engineering Projects.",
                    tech: ["Next.js", "TypeScript", "Cypress"],
                    gradient:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#667eea",
                    role: "Full-Stack Development & Projektmanagement",
                    github: "https://github.com/SEPMFWS422A/time2meet",
                    isUniversityProject: true,
                  },
                  {
                    title: "Algorithmischer Handel",
                    description:
                      "Machine-Learning-Projekt zur Prognose von Aktienkursen mittels technischer Indikatoren und Rohdaten. Entwickelt für das Modul Data Analysis and Machine Learning.",
                    tech: ["Python", "Machine Learning", "Jupyter"],
                    gradient:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    color: "#f093fb",
                    role: "Data Analysis & ML-Modellierung",
                    github:
                      "https://github.com/KD-Studies/Algorithmischer-Handel",
                    isUniversityProject: true,
                  },
                ].map((project, index) => (
                  <Zoom in timeout={800 + index * 200} key={index}>
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor: "rgba(30, 41, 59, 0.5)",
                        backdropFilter: "blur(20px)",
                        borderRadius: 4,
                        overflow: "hidden",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        border: "1px solid rgba(96, 165, 250, 0.2)",
                        position: "relative",
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "5px",
                          background: project.gradient,
                          opacity: 1,
                        },
                        "&:hover": {
                          transform: "translateY(-16px) scale(1.02)",
                          boxShadow: `0 24px 64px ${project.color}50`,
                          borderColor: `${project.color}80`,
                          bgcolor: "rgba(30, 41, 59, 0.7)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 200,
                          background: project.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "200%",
                            height: "200%",
                            background:
                              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                            top: "-50%",
                            left: "-50%",
                            animation: "rotate 20s linear infinite",
                          },
                          "@keyframes rotate": {
                            "0%": { transform: "rotate(0deg)" },
                            "100%": { transform: "rotate(360deg)" },
                          },
                        }}
                      >
                        {project.isUniversityProject && (
                          <Chip
                            label="Hochschulprojekt"
                            size="small"
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              bgcolor: "rgba(255, 255, 255, 0.95)",
                              color: "rgba(0, 0, 0, 0.87)",
                              fontWeight: 700,
                              fontSize: "0.75rem",
                              zIndex: 2,
                              backdropFilter: "blur(10px)",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            }}
                          />
                        )}
                        <Code
                          sx={{
                            fontSize: 90,
                            color: "white",
                            opacity: 0.95,
                            position: "relative",
                            zIndex: 1,
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.4))",
                          }}
                        />
                      </Box>
                      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 2.5,
                            color: "white",
                            fontSize: { xs: '1.4rem', md: '1.6rem' },
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "grey.300",
                            mb: 2.5,
                            fontWeight: 400,
                            lineHeight: 1.8,
                            minHeight: 80,
                            fontSize: '0.95rem',
                          }}
                        >
                          {project.description}
                        </Typography>
                        {project.role && (
                          <Box
                            sx={{
                              bgcolor: `${project.color}15`,
                              border: `1px solid ${project.color}40`,
                              borderRadius: 2,
                              px: 2,
                              py: 1.5,
                              mb: 3,
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                color: project.color,
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                display: "block",
                              }}
                            >
                              🎯 {project.role}
                            </Typography>
                          </Box>
                        )}
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
                        >
                          {project.tech.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                bgcolor: `${project.color}20`,
                                color: project.color,
                                fontWeight: 700,
                                border: `1.5px solid ${project.color}50`,
                                fontSize: "0.8rem",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  bgcolor: `${project.color}35`,
                                  transform: "translateY(-3px)",
                                  boxShadow: `0 6px 16px ${project.color}40`,
                                },
                              }}
                            />
                          ))}
                        </Stack>
                        <Box sx={{ mt: 'auto' }}>
                          <Button
                            endIcon={<ArrowForward />}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              textTransform: "none",
                              fontWeight: 700,
                              color: project.color,
                              fontSize: '0.95rem',
                              p: 0,
                              "&:hover": {
                                bgcolor: "transparent",
                                transform: "translateX(6px)",
                              },
                              transition: "transform 0.3s ease",
                            }}
                          >
                            Auf GitHub verfügbar
                          </Button>
                        </Box>
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
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Lass uns reden
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: "grey.400",
                mb: 8,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Für Anfragen bezüglich beruflicher Zusammenarbeit stehe ich gerne
              zur Verfügung.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 3,
                mb: 6,
              }}
            >
              <Button
                variant="outlined"
                startIcon={<Email />}
                href="mailto:Darcankursat@gmail.com"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 2.5,
                  borderRadius: 3,
                  borderWidth: 2,
                  fontSize: '1rem',
                  borderColor: '#60a5fa',
                  color: '#60a5fa',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderWidth: 2,
                    transform: 'translateY(-4px)',
                    bgcolor: 'rgba(96, 165, 250, 0.1)',
                    boxShadow: '0 8px 24px rgba(96, 165, 250, 0.4)',
                  },
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
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 2.5,
                  borderRadius: 3,
                  borderWidth: 2,
                  fontSize: '1rem',
                  borderColor: '#10b981',
                  color: '#10b981',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderWidth: 2,
                    transform: 'translateY(-4px)',
                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
                  },
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
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 2.5,
                  borderRadius: 3,
                  borderWidth: 2,
                  fontSize: '1rem',
                  borderColor: '#a78bfa',
                  color: '#a78bfa',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderWidth: 2,
                    transform: 'translateY(-4px)',
                    bgcolor: 'rgba(167, 139, 250, 0.1)',
                    boxShadow: '0 8px 24px rgba(167, 139, 250, 0.4)',
                  },
                }}
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default Main;
