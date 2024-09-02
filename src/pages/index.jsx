import { useContext } from 'react';
import Header from '@/shared/components/header/header';
import Head from 'next/head';
import { DesktopContext } from '@/shared/context/desktop';
import Sidebar from '@/shared/components/sidebar/sidebar';

function Index() {
  const { activeDesktopItem } = useContext(DesktopContext);

  return (
    <>
      <Head>
        <title>Document flow</title>
        <meta name='description' content='content' />
      </Head>
      <div className='container'>
        <Sidebar />
        <main className='content'>
          <Header />
          <div>{activeDesktopItem?.content}</div>
        </main>
      </div>
    </>
  );
}

export default Index;
