/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage, NewsPage, ContactPage } from './pages';

const App: React.FC = () => {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
