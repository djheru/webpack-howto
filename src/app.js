import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './components/AppRoot';
import { AppContainer } from 'react-hot-loader';
import bio from '../data/bio';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component heading={bio.heading} content={bio.bioText}/>
    </AppContainer>,
    document.getElementById('react-root')
  );
}
render(AppRoot);

if (module.hot) {
  module.hot.accept('./components/AppRoot.js', () => {
    const NewAppRoot = require('./components/AppRoot').default;
    render(NewAppRoot);
  });
}