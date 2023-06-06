/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Heading, Paragraph, GlobalStyles, Button } from './components';

// CSS Module
// Không bị trùng css của nhau
// Hoạt động độc lập với từng component

/**Lưu ý:
 * Không dùng được tag name, ví dụ: h1, *
 * Không đặt theo kiểu có dấu gạch ngang, ví dụ:  heading-something
 */

export default function CSSModule() {
  document.title = 'Learn CSS Module';

  return (
    <GlobalStyles>
      <div style={{ padding: '0 32px' }}>
        <Heading />
        <Paragraph />
        <div className='d-flex'>
          <div>Item1</div>
          <div>Item2</div>
        </div>
        <Button primary />
        <Button primary disabled/>
      </div>
    </GlobalStyles>
  );
}
