import '@/shared/assets/styles/globals.css';
import Sidebar from '@/shared/components/sidebar/sidebar';
import '@/shared/assets/styles/layout/layout.scss';
import '@/shared/components/sidebar/list-item.scss';
import '@/shared/components/sidebar/sidebar.scss';
import '@/shared/components/sidebar/header.scss';

export default function App({ Component, pageProps }) {
  return (
    <div className='container'>
      <Sidebar />
      <div className='content'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
