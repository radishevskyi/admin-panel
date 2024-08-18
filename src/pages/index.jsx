import { useContext } from 'react';
import Header from '@/shared/components/header/header';
import Head from 'next/head';
import { DesktopContext } from '@/shared/context/desktop';

function Index() {
  const { activeDesktopItem } = useContext(DesktopContext);

  return (
    <>
      <Head>
        <title>Document flow</title>
        <meta name='description' content='content' />
      </Head>
      <main>
        <Header />
        {activeDesktopItem?.content}
      </main>
    </>
  );
}

export default Index;
