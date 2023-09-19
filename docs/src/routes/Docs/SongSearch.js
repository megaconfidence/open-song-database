/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const SongSearch = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='song search'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/search/song?query=adam&limit=10' />
          </h3>
          <div className='line-numbers language-js'>
            Send the following <code>GET</code> request to search for a song
            <Code
              content={`\n${restUrl}/<your-api-key>/search/song?query=<song-name>&limit=<number-of-results>`}
            />
            The above request returns an array of songs sorted by best match
          </div>
          <h3 css={{ marginTop: '30px' }}>
            <span>GRAPHQL</span>
            <PgButton qType='graphql' query={`
query {
  searchSong(input: {query: "adam", limit: 10}) {
    id
    name
    duration
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
  searchSong(input: {query: "<song-name>", limit: <number-of-results>}) {
    id
    name
    duration
  }
}`}
            />
          </div>
        </div>
      </Page>
    </div>
  );
};
export default SongSearch;
