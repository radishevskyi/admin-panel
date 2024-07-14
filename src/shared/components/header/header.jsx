import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faDesktop, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ desktops, setActiveDesktop, activeDesktopId }) {
  return (
    <header>
      <div className='header'>
        <div className='active-desktop'>
          <button className='account-button'>{desktops.length}</button>
          {desktops.map((desktop) => (
            <button
              className={`active-buttons ${
                desktop.id === activeDesktopId ? 'active-id' : ''
              }`}
              onClick={() => setActiveDesktop(desktop)}
            >
              {desktop.title}
            </button>
          ))}
        </div>
        <div className='header-item'>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faDesktop} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faMessage} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faBell} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faSearch} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faUser} className='icon' />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
