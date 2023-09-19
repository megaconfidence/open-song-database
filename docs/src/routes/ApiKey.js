/**  @jsx jsx  */
import mq from '../utils/mq';
import { jsx } from '@emotion/core';
import Info from '../components/Info';
import Form from '../components/Form';
import { useContext, useState } from 'react';
import { AppContext } from '../components/AppContext';
import Footer from '../components/Footer';

const ApiKey = () => {
  const { keyUrl } = useContext(AppContext);
  const [sentEmail, setSentEmail] = useState({
    sent: undefined,
    email: undefined,
  });

  const handleSubmit = async (data) => {
    try {
      const resData = await fetch(keyUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await resData.json();
      setSentEmail(res.data);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <section css={{ padding: '24px' }}>
      <main
        css={{
          // maxWidth: '700px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {sentEmail.sent === true ? (
          <div css={{ marginBottom: '24px', [mq[1]]: { width: '748px' } }}>
            <Info
              message={`Your API key has been sent to ${sentEmail.email}`}
            />
          </div>
        ) : null}

        {sentEmail.sent === false ? (
          <div css={{ marginBottom: '24px', [mq[1]]: { width: '748px' } }}>
            <Info warn message='Could not send API key' />
          </div>
        ) : null}

        {sentEmail.sent === undefined ? (
          <div
            css={{
              width: '100%',
              padding: '24px',
              borderRadius: '3px',
              [mq[1]]: {
                width: '700px',
                border: '1px solid #dfdfdf',
              },
            }}
          >
            <div
              css={{
                color: '#354F52',
                textTransform: 'capitalize',
                font: 'normal normal 800 30px/29px PT Sans',
              }}
            >
              generate API key
            </div>
            <p css={{ color: '#404040', marginTop: '30px' }}>
              Your uniquely generated API key would be sent to your email
              address on successful registration
            </p>
            <Form handleSubmit={handleSubmit} />
          </div>
        ) : null}
      </main>
      <Footer />
    </section>
  );
};

export default ApiKey;
