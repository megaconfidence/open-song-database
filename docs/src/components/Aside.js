/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import mq from '../utils/mq';

const Aside = () => {
  return (
    <aside>
      <ul
        css={{
          all: 'unset',
          width: '100%',
          display: 'flex',
          color: '#2F3E46',
          height: '100vh',
          flexDirection: 'column',
          textTransform: 'capitalize',
          font: 'normal normal normal 16px/19px PT Sans',
          [mq[1]]: {
            paddingTop: '82px',
            width: 'fit-content',
            borderRight: '1px solid #dfdfdf',
          },
          li: {
            all: 'unset',
            width: 'inherit',
            a: {
              [mq[1]]: {
                width: '288px',
              },
              padding: '24px',
              display: 'block',
            },
          },
        }}
      >
        <li>
          <NavLink exact to='/docs/contribute' activeClassName='aside-active'>
            contribute
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/generatekey' activeClassName='aside-active'>
            generate API key
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/artistsearch' activeClassName='aside-active'>
            artist search
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/albumsearch' activeClassName='aside-active'>
            album search
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/songsearch' activeClassName='aside-active'>
            song search
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/pagingalbum' activeClassName='aside-active'>
            paging albums
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/docs/getartistdata'
            activeClassName='aside-active'
          >
            get artist data
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/getalbumdata' activeClassName='aside-active'>
            get album data
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/getsongdata' activeClassName='aside-active'>
            get song data
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/notes' activeClassName='aside-active'>
            notes
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/docs/changelog' activeClassName='aside-active'>
            change log
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
