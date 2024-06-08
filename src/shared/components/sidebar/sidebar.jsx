import React, { useState } from 'react';
import menuList from '@/shared/constants/menuList';
import Header from '@/shared/components/sidebar/header';
import ListItem from './list-item';

function Sidebar() {
  const [openItemId, setOpenItemId] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <Header
          onToggleSidebar={handleCollapseToggle}
          isCollapsed={isCollapsed}
        />
        <ul className={`navigation ${isCollapsed ? 'collapsed' : ''}`}>
          {menuList.map((item) => (
            <ListItem
              text={item.text}
              id={item.id}
              icon={item.icon}
              subMenu={item.subMenu}
              isSidebarCollapsed={isCollapsed}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
