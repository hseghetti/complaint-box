import React from 'react';
import { PropTypes } from 'prop-types';
import { ChakraProvider, localStorageManager } from '@chakra-ui/core';

const Layout= ({ children }) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} options={{ useSystemColorMode: true }}>
      {children}
    </ChakraProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;
