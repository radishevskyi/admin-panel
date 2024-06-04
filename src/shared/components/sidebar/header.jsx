import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar, faFolder } from '@fortawesome/free-regular-svg-icons';
import styles from '@/shared/components/sidebar/header.module.scss';

function Header({ onToggleSidebar, isCollapsed }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${
        isCollapsed ? styles.collapsedHeader : ''
      }`}
    >
      <button className={styles.button}>
        <FontAwesomeIcon icon={faStar} className={styles.icon} />
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faFolder} className={styles.iconFolder} />
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon
          icon={faPlus}
          onClick={toggleMenu}
          className={styles.icon}
        />
      </button>
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li>Вихідний документ</li>
            <li>Внутрішній документ</li>
            <li>Вхідний документ</li>
          </ul>
        </div>
      )}
      <button
        className={`${styles.buttonChevronLeft} ${
          isCollapsed ? styles.collapsedPosition : ''
        }`}
        onClick={onToggleSidebar}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`${styles.chevronIcon} ${
            isCollapsed ? styles.collapsed : ''
          }`}
        />
      </button>
    </header>
  );
}

export default Header;
