import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  faFolderOpen,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faFileAlt,
} from '@fortawesome/free-regular-svg-icons';
import styles from '@/shared/components/sidebar/sidebar.module.scss';
import Header from '@/shared/components/sidebar/header';

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <Header />
        <ul className={styles.navigation}>
          <li className={styles.sidebarList}>
            <FontAwesomeIcon icon={faFolderOpen} />
            <p className={styles.adminServices}>Адміністративні послуги</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '10px', marginLeft: 'auto' }}
            />
          </li>
          <li className={styles.sidebarList}>
            <FontAwesomeIcon icon={faFileAlt} style={{ width: '15px' }} />
            <p className={styles.adminServices}>Доступні мені</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '10px', marginLeft: 'auto' }}
            />
          </li>
          <li className={styles.sidebarList}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
            <p className={styles.adminServices}>Вхідні</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '10px', marginLeft: 'auto' }}
            />
          </li>
          <li className={styles.sidebarList}>
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
            <p className={styles.adminServices}>Внутрішні</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '10px', marginLeft: 'auto' }}
            />
          </li>
          <li className={styles.sidebarList}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            <p className={styles.adminServices}>Вихідні</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '10px', marginLeft: 'auto' }}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
