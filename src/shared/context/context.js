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
  const [desktopOrder, setDesktopOrder] = useState([initialDesktops[0].id]);

  const addDesktop = ({ title, columns, rows, id }) => {
    const existingDesktop = desktops.find((desktop) => desktop.id === id);

    if (existingDesktop) {
      setActiveDesktopItem(existingDesktop);
      setDesktopOrder((prevOrder) => {
        const filteredOrder = prevOrder.filter((desktopId) => desktopId !== id);
        return [...filteredOrder, id];
      });
    } else {
      const newDesktop = {
        id,
        title,
        content: <ReusableTable headerColumns={columns} data={rows} />,
      };
      setDesktops((prevDesktops) => [...prevDesktops, newDesktop]);
      setActiveDesktopItem(newDesktop);
      setDesktopOrder((prevOrder) => [...prevOrder, newDesktop.id]);
    }
  };

  const closeDesktop = (id) => {
    setDesktops((prevDesktops) => {
      const updatedDesktops = prevDesktops.filter(
        (desktop) => desktop.id !== id
      );
      const updatedOrder = desktopOrder.filter((desktopId) => desktopId !== id);

      if (updatedOrder.length > 0) {
        const lastOpenedDesktopId = updatedOrder[updatedOrder.length - 1];
        const lastOpenedDesktop = updatedDesktops.find(
          (desktop) => desktop.id === lastOpenedDesktopId
        );
        setActiveDesktopItem(lastOpenedDesktop || null);
      } else {
        setActiveDesktopItem(null);
      }

      setDesktopOrder(updatedOrder);
      return updatedDesktops;
    });
  };

  return (
    <DesktopContext.Provider
      value={{
        activeDesktopItem,
        setActiveDesktopItem,
        desktops,
        addDesktop,
        closeDesktop,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};
