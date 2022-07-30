import { createContext, useState } from 'react';

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

export const BlockContextProvider = ({ children }) => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const toggleBold = () => {
    setBold((prev) => !prev);
    console.log(bold);
  };

  return <BlockContext.Provider value={{ onToggleBold: toggleBold }}>{children}</BlockContext.Provider>;
};

export default BlockContext;
