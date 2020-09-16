import React from 'react';
import App from '../src/App';
import ReactDOMServer from 'react-dom/server';

export const getDom = () => ReactDOMServer.renderToString(<App />)
export default getDom;