/** @jsxImportSource @emotion/react */
import { css, Global, jsx } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          margin: 0;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
