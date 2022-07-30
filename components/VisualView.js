import { useState, useEffect, useContext } from 'react';

import BlockContext from '../contexts/blockContext';

const VisualView = () => {
  const { onToggleBold } = useContext(BlockContext);
  const onTyping = (e) => {
    const visualHtml = e.target.innerHTML;
    // console.log(visualHtml);
  };

  const onKeyPressing = (e) => {
    // console.log(e.key === 'Enter');
    onToggleBold();
  };

  const onSelectText = (e) => {
    const selectedText = window.getSelection().toString();
    // console.log(selectedText);
  };

  return <div className="visual-view" contentEditable={true} onInput={onTyping} onKeyDown={onKeyPressing} onMouseUp={onSelectText}></div>;
};

export default VisualView;
