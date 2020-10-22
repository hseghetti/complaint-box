import { Textarea } from '@chakra-ui/core';
import React from 'react';

export default function card({ id, size = 'lg', placeholder, text,  ...field}) {
  return (
    <>
      <Textarea {...field} placeholder={placeholder} size={size} id={id} resize="none" />
    </>
  );
}
