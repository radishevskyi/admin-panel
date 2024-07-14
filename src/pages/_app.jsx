import Sidebar from '@/shared/components/sidebar/sidebar';
import '@/pages/_index.scss';

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
