import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar, faFolder } from '@fortawesome/free-regular-svg-icons';
import styles from '@/shared/components/sidebar/header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faFolder} />
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </header>
  );
}

export default Header;
