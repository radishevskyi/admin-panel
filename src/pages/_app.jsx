import '@/pages/_index.scss';
import { DesktopProvider } from '@/shared/context/desktop';

export default function App({ Component, pageProps }) {
  return (
    // AuthProvider
    <DesktopProvider>
      <Component {...pageProps} />
    </DesktopProvider>
    // AuthProvider
  );
}
