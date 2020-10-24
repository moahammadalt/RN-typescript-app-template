import React from 'react';
import AppContainer from './src/containers/AppContainer';

interface Props {}

const App: React.FC<Props> = () => {
  // to show network requests in debugger, for development only.
  /* const _XHR = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
  XMLHttpRequest = _XHR; */

  return <AppContainer />;
};

export default App;
