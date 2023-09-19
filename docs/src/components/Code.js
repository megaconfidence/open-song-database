import React from 'react';

const Code = ({ content }) => (
  <pre>
    <code>{`${content} \n\n`}</code>
  </pre>
);

export default Code;
