/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const ArtistSearch = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='artist search'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/search/artist?query=sia&limit=10' />
          </h3>
          <div className='line-numbers language-js'>
            Make the following <code>GET</code> request to perform an artist
            search
            <Code
              content={`\n${restUrl}/<your-api-key>/search/artist?query=<artist-name>&limit=<number-of-results>`}
            />
            An array of matching artists will be returned, excluding their
            albums and song
          </div>
          <h3 css={{ marginTop: '30px' }}>
            <span>GRAPHQL</span>

            <PgButton
              qType='graphql'
              query={`
query {
  searchArtist(input: { query: "sia", limit: 10 }) {
    id
    name
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
  searchArtist(input: { query: "<artist-name>", limit: <number-of-results> }) {
    id
    name
  }
}`}
            />
          </div>
        </div>
      </Page>
    </div>
  );
};
export default ArtistSearch;
