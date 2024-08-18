import React, { useState } from 'react';
import { menuList } from './sidebar.data';
import SidebarHeader from '@/shared/components/sidebar/sidebar-header';
import ListItem from './list-item';

function Sidebar() {
  const [openItemId, setOpenItemId] = useState(null);
  const [openSubItemId, setOpenSubItemId] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
              isOpen={openItemId === item.id}
              openSubItemId={openSubItemId}
              handleSubItemToggle={handleSubItemToggle}
              columns={item.columns || []}
              rows={item.rows || []}
              id={item.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
