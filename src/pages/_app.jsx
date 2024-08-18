import Sidebar from '@/shared/components/sidebar/sidebar';
import '@/pages/_index.scss';
import { DesktopProvider } from '@/shared/context/desktop';

export default function App({ Component, pageProps }) {
  return (
    <DesktopProvider>
      <div className='container'>
        <Sidebar />
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </div>
    </DesktopProvider>
  );
}
