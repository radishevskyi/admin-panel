import { useContext } from 'react';
import Header from '@/shared/components/header/header';
import Head from 'next/head';
import { DesktopContext } from '@/shared/context/context';

function Index() {
  const { desktops, activeDesktopItem, setActiveDesktopItem } =
    useContext(DesktopContext);

  return (
    <>
      <Head>
        <title>Document flow</title>
        <meta name='description' content='content' />
      </Head>
      <main>
        <Header
          activeDesktopId={activeDesktopItem?.id}
          desktops={desktops}
          setActiveDesktop={setActiveDesktopItem}
        />
        {activeDesktopItem?.content}
      </main>
    </>
  );
}

export default Index;
