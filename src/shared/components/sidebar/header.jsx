import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar, faFolder } from '@fortawesome/free-regular-svg-icons';

function Header({ onToggleSidebar, isCollapsed }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isCollapsed ? 'collapsed-header' : ''}`}>
      <button className='header-buttons'>
        <FontAwesomeIcon icon={faStar} className='icon' />
      </button>
      <button className='header-buttons'>
        <FontAwesomeIcon icon={faFolder} className='icon folder' />
      </button>
      <button className='header-buttons'>
        <FontAwesomeIcon icon={faPlus} onClick={toggleMenu} className='icon' />
      </button>
      {isMenuOpen && (
        <div className={`dropdown-menu ${isCollapsed ? 'collapsed-menu' : ''}`}>
          <ul>
            <li>Вихідний документ</li>
            <li>Внутрішній документ</li>
            <li>Вхідний документ</li>
          </ul>
        </div>
      )}
      <button
        className={`button-collapse ${isCollapsed ? 'collapsed-position' : ''}`}
        onClick={onToggleSidebar}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`chevron-icon ${isCollapsed ? 'is--collapsed' : ''}`}
        />
      </button>
    </header>
  );
}

export default Header;
