import Basic from '@/desktops/basic/basic';
import ReusableTable from '@/desktops/basic/reusable-table';
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

  const addDesktop = ({ title, columns, rows, id }) => {
    const newDesktop = {
      id,
      title,
      content: <ReusableTable headerColumns={columns} data={rows} />,
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
