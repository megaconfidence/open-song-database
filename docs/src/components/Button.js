/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Button = ({loading, text}) => {
  return (
    <div
      css={{
        height: '60px',
        margin: '24px 0',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        'input, div': {
          color: '#fff',
          width: '184px',
          cursor: 'pointer',
          borderRadius: '3px',
          border: '1px solid transparent',
          background: '#84A98C 0% 0% no-repeat padding-box',
          filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.24))',
        },
      }}
    >
      {loading ? (
        <div
          css={{
            height: '45px',
            display: 'flex',
            padding: '7px 0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            alt='loading'
            src='/image/spinner.svg'
            css={{
              width: '30px',
            }}
          />
        </div>
      ) : (
        <input
          type='submit'
          value={text || 'Submit'}
          css={{
            padding: '15px 0',
            '&:hover': {
              background: '#354F52',
            },
          }}
        />
      )}
    </div>
  );
};

export default Button;
