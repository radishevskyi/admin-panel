import Basic from '@/desktops/basic/basic';
import Content2 from '@/desktops/content/content2';
import { createContext, useState } from 'react';

export const DesktopContext = createContext(null);

export const DesktopProvider = ({ children }) => {
  const initialDesktops = [
    {
      id: 1,
      title: 'Базовий робочий стіл',
      content: <Basic />,
    },
  ];
  const [activeDesktopItem, setActiveDesktopItem] = useState(
    initialDesktops[0]
  );
  const [desktops, setDesktops] = useState(initialDesktops);

  const addDesktop = (title, content) => {
    const newDesktop = {
      id: desktops.length + 1,
      title,
      content,
    };
    setDesktops((prevDesktops) => [...prevDesktops, newDesktop]);
    setActiveDesktopItem(newDesktop);
  };

  return (
    <DesktopContext.Provider
      value={{
        activeDesktopItem,
        setActiveDesktopItem,
        desktops,
        addDesktop,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};
