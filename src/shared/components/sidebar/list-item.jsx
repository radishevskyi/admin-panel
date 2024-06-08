import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ListItem({ id, text, icon, isSidebarCollapsed, subMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className='list-item-container'>
      <div
        className={`sidebarList ${isSidebarCollapsed ? 'collapsed' : ''}`}
        onClick={toggleOpen}
      >
        <FontAwesomeIcon icon={icon} className='icons' />
        {!isSidebarCollapsed && (
          <>
            <span className='adminServices'>{text}</span>
            {subMenu && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`arrow ${isOpen ? 'open' : ''}`}
              />
            )}
          </>
        )}
      </div>
      {subMenu && (
        <ul
          className={`subMenu ${isOpen ? 'is--open' : ''} ${
            isSidebarCollapsed ? 'is--sidebar-collapsed' : ''
          }`}
        >
          {subMenu.map((subItem) => (
            <li key={subItem.id} className='sidebarList'>
              <span className='adminServices'>{subItem.text}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
