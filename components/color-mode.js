import React from 'react';
import { Button, useColorMode } from '@chakra-ui/core';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>;
}
