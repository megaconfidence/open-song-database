/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const AlbumSearch = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='album search'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/search/album?query=love&limit=10' />
          </h3>
          <div className='line-numbers language-js'>
            To search for albums make the following <code>GET</code> request to
            this endpoint
            <Code
              content={`\n${restUrl}/<your-api-key>/search/album?query=<album-name>&limit=<number-of-results>`}
            />
            This returns an array of album metadata. Please note that the songs
            are not included
          </div>
          <h3 css={{ marginTop: '30px' }}>
            <span>GRAPHQL</span>
            <PgButton
              qType='graphql'
              query={`
query {
  searchAlbum(input: { query: "love", limit: 10 }) {
    id
    name
    year
    image
  }
}`}
            />
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
  searchAlbum(input: { query: "<album-name>", limit: <number-of-results> }) {
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
export default AlbumSearch;
