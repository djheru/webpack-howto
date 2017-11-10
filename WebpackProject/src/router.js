import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const componentRoutes = {
    component: Home,
    path: '/',
    indexRoute: { component: ArtistMain },
    childRoutes: [
        {
            path: 'artists/new',
            async getComponent(location, cb) {
                const { default: ArtistCreate } = await System.import('./components/artists/ArtistCreate');
                cb(null, ArtistCreate);
            }
        },
		{
			path: 'artists/:id',
			async getComponent(location, cb) {
				const { default: ArtistDetail } = await System.import('./components/artists/ArtistDetail');
				cb(null, ArtistDetail);
			}
		},
		{
			path: 'artists/:id/edit',
			async getComponent(location, cb) {
				const { default: ArtistEdit } = await System.import('./components/artists/ArtistEdit');
				cb(null, ArtistEdit);
			}
		}
    ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
