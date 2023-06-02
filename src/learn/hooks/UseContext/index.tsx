/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import Content from './Content';
import './css/main.css'

// Context
// ComponentA => ComponentB => ComponentC

//1. Create context
//2. Provider (Nhà cung cấp)
//3. Consumer (Người sử dụng)

const UseContext: React.FC = () => {
  document.title = 'Learn Hooks UseContext';

  const App = () => {
    const context = React.useContext(ThemeContext);
    return (
      <div style={{ padding: 20 }}>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
    );
  };

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default UseContext;
