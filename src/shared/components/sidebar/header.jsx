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
    <header className={`header ${isCollapsed ? 'collapsedHeader' : ''}`}>
      <button className='button'>
        <FontAwesomeIcon icon={faStar} className='icon' />
      </button>
      <button className='button'>
        <FontAwesomeIcon icon={faFolder} className='iconFolder' />
      </button>
      <button className='button'>
        <FontAwesomeIcon icon={faPlus} onClick={toggleMenu} className='icon' />
      </button>
      {isMenuOpen && (
        <div className={`dropdownMenu ${isCollapsed ? 'collapsedMenu' : ''}`}>
          <ul>
            <li>Вихідний документ</li>
            <li>Внутрішній документ</li>
            <li>Вхідний документ</li>
          </ul>
        </div>
      )}
      <button
        className={`buttonChevronLeft ${
          isCollapsed ? 'collapsedPosition' : ''
        }`}
        onClick={onToggleSidebar}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`chevronIcon ${isCollapsed ? 'is--collapsed' : ''}`}
        />
      </button>
    </header>
  );
}

export default Header;
