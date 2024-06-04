import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import menuList from '@/shared/constants/menuList';
import styles from '@/shared/components/sidebar/sidebar.module.scss';
import Header from '@/shared/components/sidebar/header';

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
      <div
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}
      >
        <Header
          onToggleSidebar={handleCollapseToggle}
          isCollapsed={isCollapsed}
        />
        <ul
          className={`${styles.navigation} ${
            isCollapsed ? styles.collapsed : ''
          }`}
        >
          {menuList.map((item) => (
            <React.Fragment key={item.id}>
              <li
                className={`${styles.sidebarList} ${
                  isCollapsed ? styles.collapsed : ''
                }`}
                onClick={() => handleToggle(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.icons} />
                {!isCollapsed && (
                  <>
                    <span className={styles.adminServices}>{item.text}</span>
                    {item.subMenu && (
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={`${styles.arrow} ${
                          openItemId === item.id ? styles.open : ''
                        }`}
                        onClick={() => handleToggle(item.id)}
                      />
                    )}
                  </>
                )}
              </li>
              {item.subMenu && openItemId === item.id && !isCollapsed && (
                <ul className={styles.subMenu}>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id} className={styles.sidebarList}>
                      <span className={styles.adminServices}>
                        {subItem.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
