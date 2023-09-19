/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import mq from '../utils/mq';

const Nav = () => {
  return (
    <nav
      css={{
        top: '0',
        zIndex: '10',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#354F52 0% 0% no-repeat padding-box',
        '@media (max-width: 470px)': {
          flexWrap: 'wrap',
          paddingTop: '10px',
        },
      }}
    >
      <NavLink to='/'>
        <div
          css={{
            font: 'normal normal 30px/42px PT Sans',
            '@media (max-width: 470px)': {
              marginBottom: '20px',
            },
          }}
        >
          <span
            css={{
              display: 'none',
              fontWeight: 'bold',
              [mq[1]]: { display: 'inline-block' },
            }}
          >
            Open Song Database
          </span>{' '}
          <span
            css={{
              fontWeight: 'bold',
              paddingLeft: '13px',
              display: 'inline-block',
              [mq[1]]: { display: 'none' },
              '@media (max-width: 400px)': {
                padding: '8px',
              },
            }}
          >
            OSDB
          </span>{' '}
          API
        </div>
      </NavLink>
      <ul
        css={{
          all: 'unset',
          li: {
            all: 'unset',
            a: {
              padding: '15px',
              textTransform: 'uppercase',
              border: '2px solid transparent',
              font: 'normal normal 600 16px/19px PT Sans',
              [mq[0]]: {
                padding: '15px 30px',
              },
              '@media (max-width: 400px)': {
                padding: '10px',
              },
            },
          },
        }}
      >
        <li>
          <NavLink to='/docs' activeClassName='nav-active'>
            docs
          </NavLink>
        </li>
        <li>
          <NavLink to='/playground' activeClassName='nav-active'>
            playground
          </NavLink>
        </li>

        <li>
          <NavLink to='/apikey' activeClassName='nav-active'>
            API key
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/patron' activeClassName='nav-active'>
            become a patron
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
