/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Router: React.FC = () => {
  document.title = 'Learn Router v6';
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Router;
