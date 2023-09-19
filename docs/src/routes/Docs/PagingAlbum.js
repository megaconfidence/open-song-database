/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const PagingAlbum = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='paging albums'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/album?page=1&limit=10' />
          </h3>
          <div className='line-numbers language-js'>
            You can page through the entire albums in the database by sending a{' '}
            <code>GET</code> request to this endpoint
            <Code
              content={`\n${restUrl}/<your-api-key>/album?page=<page-number>&limit=<number-of-results>`}
            />
            Please note that the above request does not return the song data in
            each album, it only returns an array of albums with their metadata.
            To return an array of albums with their songs, make a request to
            this endpoint
            <Code
              content={`\n${restUrl}/<your-api-key>/album/song?page=<page-number>&limit=<number-of-results>`}
            />
          </div>
          <h3 css={{ marginTop: '30px' }}>
            <span>GRAPHQL</span>
            <PgButton qType='graphql' query={`
query {
  albums(input: { page: 1, limit: 10 }) {
    id
    name
    year
    image
  }
}`} />
          </h3>
          <div className='line-numbers language-js'>
            <p>
              <code>GRAPHQL</code>
              <span css={{ display: 'inline-block', margin: '0 1rem' }}>
                endpoint is
              </span>
              <code>{gqlUrl + '/<your-api-key>/'}</code>
            </p>
            <Code
              content={`
query {
  albums(input: { page: <page-number>, limit: <number-of-results> }) {
    id
    name
    year
    image
  }
}`}
            />
          </div>
        </div>
      </Page>
    </div>
  );
};
export default PagingAlbum;
