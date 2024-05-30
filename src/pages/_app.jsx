import '@/shared/assets/styles/globals.css';
import Sidebar from '@/shared/components/sidebar/sidebar';
import styles from '@/shared/assets/styles/layout/layout.module.scss';

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
