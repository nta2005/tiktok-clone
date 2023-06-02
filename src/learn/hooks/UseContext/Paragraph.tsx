import React from 'react';
import { ThemeContext } from './ThemeContext';

const Paragraph = () => {
  const context = React.useContext(ThemeContext);

  return (
    <p className={context.theme}>
      Context provides a way to pass data through the component tree without
      having to pass props down manually at every level.
    </p>
  );
};

export default Paragraph;
