/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../components/AppContext';
import Code from '../components/Code';
import Footer from '../components/Footer';
import Prism from 'prismjs';
import Button from '../components/Button';
import mq from '../utils/mq';
import Info from '../components/Info';

const PlayGround = ({ location: { search } }) => {
  const _search = new URLSearchParams(search);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { baseUrl, gqlUrl } = useContext(AppContext);
  const [query, setQuery] = useState(_search.get('query') || '');
  const [status, setStatus] = useState({ status: null, text: null });
  const [queryType, setQueryType] = useState(_search.get('qType') || 'rest');

  const runQuery = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res;

      if (queryType === 'rest') {
        res = await fetch(`${baseUrl}/rest/playgroundkey/${query}`);
      } else {
        res = await fetch(`${baseUrl}/graphql/playgroundkey/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
          }),
        });
      }
      setStatus({ status: res.status, text: res.statusText });
      setResponse(JSON.stringify(await res.json(), undefined, 2));
    } catch (error) {
      setStatus({ status: '000', text: 'An Error Occured' });
      console.log(error.message);
      setResponse(error.message, undefined, 2);
    }
    setLoading(false);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [response, queryType]);

  return (
    <section css={{ padding: '24px' }}>
      <main
        css={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div css={{ width: '100%' }}>
          <header
            css={{
              color: '#354F52;',
              padding: '12px 0',
              textTransform: 'capitalize',
              borderRadius: '10px 10px 0px 0px',
              font: 'normal normal 800 30px/29px PT Sans',
              [mq[1]]: {
                textAlign: 'center',
              },
            }}
          >
            PlayGround
          </header>
          <form
            onSubmit={runQuery}
            css={{
              label: {
                color: '#707070',
                marginBottom: '9px',
                textTransform: 'capitalize',
                font: 'normal normal normal 14px/16px PT Sans',
              },

              'input, textarea, select': {
                padding: '16px',
                color: '#354F52',
                borderRadius: '3px',
                border: '2px solid #dfdfdf',
                font: 'normal normal normal 16px/20px PT Sans',
                '&::placeholder': {
                  color: '#C9C9C9',
                },
                '&:focus': {
                  outline: 'none',
                  border: '2px solid #C9C9C9',
                },
              },

              [mq[1]]: {
                display: 'flex',
                justifyContent: 'center',
                input: {
                  width: '40vw',
                },
              },
              '@media (min-width: 1300px)': {
                textarea: {
                  width: '40vw',
                },
              },
            }}
          >
            <div
              css={{
                display: 'flex',
                margin: '24px 0',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='queryType'>Select API type</label>
              <select
                id='queryType'
                name='queryType'
                value={queryType}
                onChange={({ target }) => setQueryType(target.value)}
                css={{
                  width: '100%',
                  height: '58px',
                  appearance: 'none',
                  paddingRight: '35px',
                  MozAppearance: 'none',
                  WebkitAppearance: 'none',
                  background: 'url(image/caret.svg) 90% / 25px no-repeat #EEE',
                  [mq[1]]: {
                    width: '184px',
                    background: 'url(image/caret.svg) 85% / 15% no-repeat #EEE',
                  },
                }}
              >
                <option value='rest'>REST</option>
                <option value='graphql'>Graphql</option>
              </select>
            </div>
            <div
              css={{
                display: 'flex',
                margin: '24px 0',
                flexDirection: 'column',
                [mq[1]]: {
                  margin: '24px 10px',
                },
              }}
            >
              <label htmlFor='Query'>
                {queryType === 'rest'
                  ? 'Enter REST endpoint'
                  : 'Enter Graphql query'}
              </label>
              {queryType === 'rest' ? (
                <input
                  autoFocus
                  required
                  id='query'
                  type='text'
                  name='query'
                  value={query}
                  onChange={({ target }) => setQuery(target.value)}
                  placeholder='/search/artist?query=sia&limit=10'
                />
              ) : (
                <div>
                  <textarea
                    css={{
                      width: 'calc(100% - 36px)',
                    }}
                    required
                    rows='10'
                    id='query'
                    name='query'
                    value={query}
                    placeholder={`query {
  searchArtist(input: { query: "sia", limit: 10 }) {
    id
    name
  }
}`}
                    onChange={({ target }) => setQuery(target.value)}
                  ></textarea>
                  <div
                    css={{ fontSize: '0.8rem' }}
                    className='line-numbers language-js'
                  >
                    Visit <code>{gqlUrl + '/<your-api-key>/'}</code> to use the
                    GraphiQL explorer
                  </div>
                </div>
              )}
            </div>
            <div css={{ marginTop: '23px' }}>
              <Button loading={loading} text='Run' />
            </div>
          </form>

          {status.status ? (
            <div>
              <div css={{ display: 'flex', justifyContent: 'center' }}>
                <Info
                  _css={{
                    width: 'calc(100vw - 50px)',
                    [mq[1]]: {
                      width: '572px',
                    },
                  }}
                  message={status.status + ' ' + status.text}
                  warn={status.status !== 200 ? true : false}
                />
              </div>

              <div css={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  css={{
                    width: '20px',
                    background: '#EFF1EE 0% 0% no-repeat padding-box',
                  }}
                ></div>
                <div
                  css={{
                    color: 'white',
                    width: 'calc(100vw - 50px)',
                    background: '#354F52 0% 0% no-repeat padding-box',
                    [mq[1]]: {
                      width: '600px',
                    },
                  }}
                  className='line-numbers language-json'
                >
                  <Code content={response} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PlayGround;
