import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #fffcf8;
          font-family: 'Barlow', Georgia, serif;
          font-size: 18px;
          color: #808397;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
        h1,
        h2 {
          font-family: 'Fraunces-Black', Georgia, serif;
          margin: 0;
          font-size: 32px;
        }

        .learnMore {
          font-family: 'Fraunces-Black', Georgia, serif;
          letter-spacing: 1px;
          font-size: 15px;
          line-height: 25px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
