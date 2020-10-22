import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton
} from '@chakra-ui/core';
import { CloseIcon, CheckCircleIcon } from '@chakra-ui/icons';

import React from 'react';

const DeleteButton = ({onDelete}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
            float='right'
            colorScheme="white"
            color="green.500"
            icon={<CloseIcon boxSize={2}/>}
            isRound
            boxSize={4}
          />
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation</PopoverHeader>
        <PopoverBody>
          Do you really want to delete the comment?
          <IconButton
            float='right'
            colorScheme="green"
            color="black.500"
            icon={<CheckCircleIcon boxSize={6}/>}

            onClick={() => onDelete()}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default DeleteButton;