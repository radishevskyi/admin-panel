'use client';

import '@/pages/_index.scss';
import { AuthProvider } from '@/shared/context/auth';
import { DesktopProvider } from '@/shared/context/desktop';
import { LocalStorageProvider } from '@/shared/context/local-storage';

export default function App({ Component, pageProps }) {
  return (
    <LocalStorageProvider>
      <AuthProvider>
        <DesktopProvider>
          <Component {...pageProps} />
        </DesktopProvider>
      </AuthProvider>
    </LocalStorageProvider>
  );
}
