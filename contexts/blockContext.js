import { createContext } from 'react';

const BlockContext = createContext({
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
  align: { right: false, left: false, center: false, justify: false },
  unOrderedList: false,
  orderedList: false,
  horizontalLine: false,
});

export default BlockContext;
