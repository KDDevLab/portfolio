import { useEffect, useState } from 'react';

const format = () =>
  new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin', timeZoneName: 'short' }).format(new Date());

/** Aktuelle Uhrzeit in Moers – ein kleines menschliches Detail. */
function LocalTime() {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);

  return <time>{time}</time>;
}

export default LocalTime;
