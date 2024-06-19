import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ListItem({
  text,
  icon,
  isSidebarCollapsed,
  subMenu,
  onClick,
  isOpen,
  openSubItemId,
  handleSubItemToggle,
  className,
  indentLevel = 1,
}) {
  const indentStyle = {
    paddingLeft: `${indentLevel * 10}px`,
  };
  return (
    <li className={`list-item-container ${className || ''}`}>
      <div
        className={`sidebar-list-item ${isSidebarCollapsed ? 'collapsed' : ''}`}
        onClick={onClick}
        style={indentStyle}
      >
        <FontAwesomeIcon icon={icon} className='menu-icons' />
        {!isSidebarCollapsed && (
          <>
            <span>{text}</span>
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
          className={`submenu ${isOpen ? 'is--open' : ''} ${
            isSidebarCollapsed ? 'is--sidebar-collapsed' : ''
          }`}
        >
          {subMenu.map((subItem) => (
            <ListItem
              key={subItem.id}
              text={subItem.text}
              icon={subItem.icon}
              subMenu={subItem.nestedSubMenu}
              isSidebarCollapsed={isSidebarCollapsed}
              onClick={handleSubItemToggle(subItem.id)}
              isOpen={subItem.id === openSubItemId}
              handleSubItemToggle={() => {}}
              indentLevel={indentLevel + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
