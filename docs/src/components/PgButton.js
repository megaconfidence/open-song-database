/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const PgButton = ({ qType, query }) => (
  <Link
    to={{
      pathname: '/playground',
      search: new URLSearchParams({
        qType,
        query,
      }).toString(),
    }}
  >
    <span
      css={{
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
        marginLeft: '10px',
        borderRadius: '5px',
        background: 'black',
        padding: '3px 10px 0',
        display: 'inline-block',
        border: '2px solid black',
        '&:hover': {
          color: 'black',
          background: 'white',
        },
      }}
    >
      Run in Playground
    </span>
  </Link>
);

export default PgButton;
