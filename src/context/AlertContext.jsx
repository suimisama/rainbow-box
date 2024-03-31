import React, { createContext, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const AlertContext = createContext();

function Portal({ children }) {
  const el = document.getElementById('portal');
  return createPortal(children, el);
}

function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState(null);
  const [duration, setDuration] = useState(3000);
  const [color, setColor] = useState('hsl(240,5.9%,10%)');

  useEffect(() => {
    let timer = null;
    if (alerts) {
      timer = setTimeout(() => {
        setAlerts(null);
      }, duration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [alerts, duration]);

  function showAlerts(message, duration = 3000, color = null) {
    if (color) setColor(color);
    setDuration(duration);
    setAlerts(message);
  }

  return (
    <AlertContext.Provider value={{ alerts, showAlerts }}>
      {children}
      {alerts && (
        <Portal>
          <div
            style={{ color: color }}
            className="shadow-md flex justify-center items-center px-6 py-4 mt-6 font-semibold text-xl text-md tracking-wider rounded-md alert-container"
          >
            {alerts}
          </div>
        </Portal>
      )}
    </AlertContext.Provider>
  );
}
function useAlert() {
  const context = useContext(AlertContext);
  if (context === undefined)
    throw new Error('AlertContext不能在AlertProvider之外的地方使用!');
  return context;
}

export { AlertProvider, useAlert };
