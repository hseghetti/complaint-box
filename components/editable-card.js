import React from 'react';
import { Box } from '@chakra-ui/core';
import Card from './card';
import DeleteButton from './delete-button'

const EditableCard = ({value, handleEdit, id}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="0.3em">
      <DeleteButton onDelete={() => handleEdit(id)} />
      <Card defaultValue={value} isReadOnly size='sm' />
    </Box>
  );
};

export default EditableCard;