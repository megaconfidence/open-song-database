/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetAlbumData = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='Notes'>
        <div className='line-numbers language-js'>
          <ol
            css={{
              li: {
                marginTop: '15px',
                '&:first-of-type': {
                  marginTop: '0',
                },
              },
            }}
          >
            <li>
              Your API <code>kEY</code> is sent to your registered email
              address.{' '}
              <Link to='/apikey' className='link'>
                Click here
              </Link>{' '}
              for registration
            </li>
            <li>
              The maximum number for the <code>limit</code> query parameter is
              20. Any value greater than this defaults to 20
            </li>
            <li>
              The maximum number of request per IP is <code>10,000</code> within a 24 hour
              period
            </li>
          </ol>
        </div>
      </Page>
    </div>
  );
};
export default GetAlbumData;
