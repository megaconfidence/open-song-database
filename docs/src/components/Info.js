/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Info = ({ message, warn, _css }) => {
  return (
    <div
      css={{
        display: 'flex',
        padding: '24px',
        alignItems: 'center',
        borderRadius: '3px',
        background: '#EFF1EE 0% 0% no-repeat padding-box',
        ..._css,
      }}
    >
      <div
        css={{
          width: '40px',
          height: '40px',
          display: 'flex',
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#cad2c5',
        }}
      >
        {warn ? (
          <span
            css={{
              color: '#354F52',
              font: 'normal normal bold 25px/16px PT Sans',
            }}
          >
            !
          </span>
        ) : (
          <img
            src='/image/check.svg'
            alt='Email sent'
            css={{ width: '24px' }}
          />
        )}
      </div>
      <div
        css={{
          color: '#2F3E46',
          marginLeft: '24px',
          font: 'normal normal normal 14px/16px PT Sans',
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default Info;
