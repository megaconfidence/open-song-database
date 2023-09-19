/**  @jsx jsx  */
import mq from '../../utils/mq';
import { jsx } from '@emotion/core';
import { Route, Redirect, Switch } from 'react-router-dom';
import Notes from './Notes';
import ChangeLog from './ChangeLog';
import Aside from '../../components/Aside';
import GenerateApiKey from './GenerateApiKey';
import ArtistSearch from './ArtistSearch';
import AlbumSearch from './AlbumSearch';
import SongSearch from './SongSearch';
import PagingAlbum from './PagingAlbum';
import GetArtistData from './GetArtistData';
import GetAlbumData from './GetAlbumData';
import GetSongData from './GetSongData';
import { useState } from 'react';
import NotFound from '../../components/NotFound';
import Footer from '../../components/Footer';
import Contribute from './Contribute';

const Doc = ({ match: { path }, location: { pathname } }) => {
  const viewPort = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const [showAside, setShowAside] = useState(viewPort > 768 ? true : false);
  if (pathname === '/docs' || pathname === '/docs/') {
    return <Redirect to={`${path}/contribute`} />;
  }
  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <div
        css={{
          top: '0',
          left: '0',
          zIndex: '10',
          width: '100vw',
          position: 'fixed',
          background: '#fff',
          overflowY: 'scroll',
          backgroundColor: '#fff',
          display: showAside ? 'initial' : 'none',
          [mq[1]]: {
            zIndex: '1',
            width: 'initial',
            display: 'initial',
            overflowY: 'initial',
            height: 'min-content',
          },
        }}
        onClick={() => {
          if (viewPort <= 768) {
            setShowAside(!showAside);
          }
        }}
      >
        <Aside />
      </div>
      <div
        css={{
          top: 0,

          position: 'absolute',
          height: 'calc(100vh - 106px)',
          width: '100%',

          [mq[1]]: {
            left: '360px',
            width: 'calc(100% - 360px)',
          },
        }}
      >
        <Switch>
          <Route path={`${path}/contribute`} component={Contribute} />
          <Route path={`${path}/generatekey`} component={GenerateApiKey} />
          <Route path={`${path}/artistsearch`} component={ArtistSearch} />
          <Route path={`${path}/albumsearch`} component={AlbumSearch} />
          <Route path={`${path}/songsearch`} component={SongSearch} />
          <Route path={`${path}/pagingalbum`} component={PagingAlbum} />
          <Route path={`${path}/getartistdata`} component={GetArtistData} />
          <Route path={`${path}/getalbumdata`} component={GetAlbumData} />
          <Route path={`${path}/getsongdata`} component={GetSongData} />
          <Route path={`${path}/notes`} component={Notes} />
          <Route path={`${path}/changelog`} component={ChangeLog} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
      <div
        css={{
          zIndex: 10,
          width: '55px',
          color: '#fff',
          right: '20px',
          bottom: '20px',
          height: '55px',
          display: 'flex',
          cursor: 'pointer',
          position: 'fixed',
          borderRadius: '50%',
          alignItems: 'center',
          background: '#354F52',
          justifyContent: 'center',
          [mq[1]]: {
            display: 'none',
          },
        }}
        onClick={() => {
          setShowAside(!showAside);
        }}
      >
        <img
          css={{
            width: '25px',
          }}
          src={showAside?'/image/cancel.svg':'/image/menu.svg'}
          alt='menu'
        />
      </div>
    </div>
  );
};
export default Doc;
