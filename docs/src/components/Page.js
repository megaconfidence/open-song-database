/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from '../utils/mq';
import { useState, useEffect } from 'react';

const Page = ({ title = 'title', children }) => {
  const [visibility, setVisiblilty] = useState('hidden');
  useEffect(() => {
    setTimeout(() => {
      setVisiblilty('visable');
    }, 50);
  }, []);
  return (
    <section css={{
      padding: '24px',
      [mq[1]]: {
        width: '700px',
        margin: '0 auto',
        padding: '24px 0 0',
      },
    }} >
      <header
        css={{
          color: '#354F52;',
          padding: '12px 0',
          textTransform: 'capitalize',
          borderRadius: '10px 10px 0px 0px',
          font: 'normal normal 800 30px/29px PT Sans',
        }}
      >
        {title}
      </header>
      <main css={{ paddingBottom: '24px', lineHeight: '35px', visibility }}>
        {children}
      </main>
    </section>
  );
};

export default Page;
