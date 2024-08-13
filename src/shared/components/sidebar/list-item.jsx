import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ListItem({
  text,
  icon,
  isSidebarCollapsed,
  subMenu,
  onClick,
  onDoubleClick,
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
        className={`sidebar-list-item ${isOpen ? 'active' : ''} ${
          isSidebarCollapsed ? 'collapsed' : ''
        }`}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        style={indentStyle}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`menu-icons ${
            isSidebarCollapsed ? 'is--sidebar-collapsed' : ''
          }`}
        />
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
        <ul className={`submenu ${isOpen ? 'is--open' : ''}`}>
          {subMenu.map((subItem) => (
            <ListItem
              key={subItem.id}
              text={subItem.text}
              icon={subItem.icon}
              subMenu={subItem.nestedSubMenu}
              isSidebarCollapsed={isSidebarCollapsed}
              onClick={handleSubItemToggle(subItem.id)}
              onDoubleClick={onDoubleClick}
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
