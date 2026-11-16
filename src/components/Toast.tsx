import { useEffect, useState } from 'react';
import { TOAST_EVENT } from '../lib/ui';

function Toast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer = 0;
    const onToast = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      clearTimeout(timer);
      timer = window.setTimeout(() => setMessage(null), 2200);
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(TOAST_EVENT, onToast);
    };
  }, []);

  return (
    <div role="status" aria-live="polite">
      {message && <div className="toast">{message}</div>}
    </div>
  );
}

export default Toast;
