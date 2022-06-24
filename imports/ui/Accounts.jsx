import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

function Accounts() {
  const renderedDiv = useRef(null);

  useEffect(() => {
    // render Blaze accounts inside rendered div
    if (renderedDiv.current)
      Blaze.render(Template.loginButtons, renderedDiv.current);
    return () => {
      // cleanup
      if (renderedDiv.current)
        renderedDiv.current.removeChild(renderedDiv.current.children[0]);
    };
  }, []);

  return <div ref={renderedDiv} />;
}

export default Accounts;
