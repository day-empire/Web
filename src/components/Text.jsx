import React from 'react';

function Text({ text }) {
  return text.replaceAll("\\n", "\n").split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

export default Text;