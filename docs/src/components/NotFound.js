/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import mq from '../utils/mq';

const NotFound = () => {
  return (
    <div css={{ textAlign: 'center' }}>
      <img
        src='/image/404.gif'
        alt='Page not found'
        css={{
          marginBottom: '24px',
          width: 'calc(100vw - 30px)',
          [mq[1]]: {
            width: 'initial',
          },
        }}
      />
      <div>
        Requested page not found.{' '}
        <Link to='/' className='link'>
          Home page
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
