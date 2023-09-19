/**  @jsx jsx  */
import Prism from 'prismjs';
import { useEffect } from 'react';
import { jsx } from '@emotion/core';
import Page from '../../components/Page';

const Contribute = ({ match }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='contribute'>
        <div className='line-numbers language-js' css={{ marginTop: '24px' }}>
          <p>
            This API is completely <code>FREE</code> and{' '}
            <code>OPEN SOURCE</code>{' '}
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/cokoghenun/open-song-database-api'
            >
              (GitHub url)
            </a>
          </p>
          <p>
            It is in active development and I would love to hear your valuable{' '}
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:support@osdbapi.com'
            >
              feedback
            </a>
          </p>
          <p>
            You can also suggest <code>REST</code> endpoints by creating an{' '}
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/cokoghenun/open-song-database-api/issues'
            >
              issue on github
            </a>
          </p>
          <p>
            Thanks and have fun
            <span
              css={{ display: 'inline-block', margin: '0 5px' }}
              role='img'
              aria-label='smile'
            >
              😊
            </span>
          </p>
        </div>
      </Page>
    </div>
  );
};
export default Contribute;
