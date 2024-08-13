import React, { useContext, useState } from 'react';
import menuList from '@/shared/constants/menuList';
import SidebarHeader from '@/shared/components/sidebar/sidebar-header';
import ListItem from './list-item';
import { DesktopContext } from '@/shared/context/context';

function Sidebar() {
  const [openItemId, setOpenItemId] = useState(null);
  const [openSubItemId, setOpenSubItemId] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { addDesktop } = useContext(DesktopContext);

  const handleToggle = (id) => () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setOpenItemId(openItemId === id ? null : id);
    setOpenSubItemId(null);
  };

  const handleSubItemToggle = (id) => () => {
    setOpenSubItemId(openSubItemId === id ? null : id);
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDoubleClick = (text) => () => {
    const content = <div>{`Контент для ${text}`}</div>;
    addDesktop(text, content);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <SidebarHeader
          onToggleSidebar={handleCollapseToggle}
          isCollapsed={isCollapsed}
        />
        <ul
          className={`sidebar-list ${isCollapsed ? 'sidebar-collapsed' : ''}`}
        >
          {menuList.map((item) => (
            <ListItem
              key={item.id}
              text={item.text}
              icon={item.icon}
              subMenu={item.subMenu}
              isSidebarCollapsed={isCollapsed}
              onClick={handleToggle(item.id)}
              onDoubleClick={handleDoubleClick(item.text)}
              isOpen={openItemId === item.id}
              openSubItemId={openSubItemId}
              handleSubItemToggle={handleSubItemToggle}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
