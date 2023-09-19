/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const GetArtistData = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='get artist data'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/artist/5eab802841b68077f131fa97' />
          </h3>
          <div className='line-numbers language-js'>
            To get artist data, make the following <code>GET</code> request
            <Code content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/`} />
            The above returns basic artist information only (i.e artist name).
            To get albums and songs by artist, make the below requests
            <Code
              content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/album`}
            />
            The above returns both the artist basic information and an array of
            albums composed by the artist. This includes all relevant album
            metadata without the songs in the album
            <Code
              content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/album/song`}
            />
            The above returns artist information, album metadata and the songs
            in each album
          </div>
          <h3 css={{ marginTop: '30px' }}>
            <span>GRAPHQL</span>
            <PgButton
              qType='graphql'
              query={`
query {
  artist(id: "5eab802841b68077f131fa97") {
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
  artist(id: "<artist-id>") {
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
export default GetArtistData;
