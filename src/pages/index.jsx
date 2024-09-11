import { useContext, useState } from 'react';
import Header from '@/shared/components/header/header';
import Head from 'next/head';
import { DesktopContext } from '@/shared/context/desktop';
import Sidebar from '@/shared/components/sidebar/sidebar';

function Index() {
  const { activeDesktopItem } = useContext(DesktopContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Head>
        <title>Document flow</title>
        <meta name='description' content='content' />
      </Head>
      <div className='container'>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className={`content ${isCollapsed ? 'is--collapsed' : ''}`}>
          <Header />
          <div>{activeDesktopItem?.content}</div>
        </main>
      </div>
    </>
  );
}

export default Index;
