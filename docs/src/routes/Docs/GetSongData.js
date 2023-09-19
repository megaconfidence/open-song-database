/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';
import PgButton from '../../components/PgButton';

const GetSongData = () => {
  const { restUrl, gqlUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='get song data'>
        <div>
          <h3>
            <span>REST</span>
            <PgButton qType='rest' query='/song/5ec1404dd2afe9312cc5a51f' />
          </h3>

          <div className='line-numbers language-js'>
            To get the data for a particular song send the following{' '}
            <code>GET</code> request
            <pre>
              <Code content={`\n${restUrl}/<your-api-key>/song/<song-id>/`} />
            </pre>
            <h3 css={{ marginTop: '30px' }}>
              <span>GRAPHQL</span>
              <PgButton qType='graphql' query={`
query {
  song(id: "5ec1404dd2afe9312cc5a51f") {
    id
    name
    duration
    album {
      id
      name
      image
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
  song(id: "<song-id>") {
    id
    name
    duration
  }
}`}
              />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};
export default GetSongData;
