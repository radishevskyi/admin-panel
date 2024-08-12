import { useState } from 'react';
import Header from '@/shared/components/header/header';
import Head from 'next/head';
import Basic from '@/desktops/basic/basic';
import Content2 from '@/desktops/content/content2';

const initialDesktops = [
  {
    id: 1,
    title: 'Базовий робочий стіл',
    content: <Basic />,
  },
  {
    id: 2,
    title: 'Другий робочий стіл',
    content: <Content2 />,
  },
];

function Index() {
  const [desktops, setDesktops] = useState(initialDesktops);
  const [activeDesktop, setActiveDesktop] = useState(desktops[0]);

  return (
    <>
      <Head>
        <title>Document flow</title>
        <meta name='description' content='content' />
      </Head>
      <main>
        <Header
          activeDesktopId={activeDesktop.id}
          desktops={desktops}
          setActiveDesktop={setActiveDesktop}
        />
        {activeDesktop.content}
      </main>
    </>
  );
}

export default Index;
