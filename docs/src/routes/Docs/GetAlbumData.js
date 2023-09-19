/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const GetAlbumData = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='get album data'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/album/5ec1404cd2afe9312cc5a51d/song' />
          </h3>
          <div className='line-numbers language-js'>
            To get album data, make the following <code>GET</code> request
            <Code content={`\n${restUrl}/<your-api-key>/album/<album-id>/`} />
            The above returns album metadata without the songs
            <Code
              content={`\n${restUrl}/<your-api-key>/album/<album-id>/song`}
            />
            The above returns the album metadata as well as the songs in the
            album
          </div>
          <h3 css={{ marginTop: '30px' }}>
            <span>GRAPHQL</span>
            <PgButton qType='graphql' query={`
query {
  album(id: "5ec1404cd2afe9312cc5a51d") {
    id
    name
    year
    image
    song {
      id
      name
      duration
    }
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
  album(id: "<album-id>") {
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
export default GetAlbumData;
