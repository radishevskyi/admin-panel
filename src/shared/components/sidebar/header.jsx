import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar, faFolder } from '@fortawesome/free-regular-svg-icons';
import dropDownMenuList from '@/shared/constants/dropDownMenuList';

function Header({ onToggleSidebar, isCollapsed }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isCollapsed ? 'collapsed-header' : ''}`}>
      <button className='sidebar-header-buttons'>
        <FontAwesomeIcon icon={faStar} className='icon' />
      </button>
      <button className='sidebar-header-buttons'>
        <FontAwesomeIcon icon={faFolder} className='icon folder' />
      </button>
      <button className='sidebar-header-buttons' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faPlus} className='icon' />
      </button>
      {isMenuOpen && (
        <div className={`dropdown-menu ${isCollapsed ? 'collapsed-menu' : ''}`}>
          <ul className='dropdown-menu-list'>
            {dropDownMenuList.map((item) => (
              <li className='dropdown-menu-list-item'>
                <FontAwesomeIcon icon={item.icon} className='menu-icons' />
                <span className='dropdown-menu-item'>{item.text}</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`dropdown-menu-arrow`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className={`button-collapse`} onClick={onToggleSidebar}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`chevron-icon ${isCollapsed ? 'is--collapsed' : ''}`}
        />
      </button>
    </header>
  );
}

export default Header;
