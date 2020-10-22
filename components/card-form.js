import { Form, Formik, Field } from 'formik';
import { FormControl, FormLabel, Button, FormErrorMessage, Box, useDisclosure } from '@chakra-ui/core';
import { EditIcon, EmailIcon } from '@chakra-ui/icons';
import { Slide } from '@chakra-ui/transition';
import React, { useEffect, useState } from 'react';
import Card from './card';
import { getConfig } from '../config/fire-config';

export default function CardForm () {
  const validatecomment = (value) => {
    let error;

    if (!value) {
      error = 'comment is required';
    }

    return error;
  };

  const handleSubmit = (values, actions) => {
    setLoading(true);
    getConfig.then(instance => {
      instance.firestore()
      .collection('comments')
      .add({
        text: values.comment,
        timestamp: Date.now(),
        status: 'NEW'
      });
      actions.setSubmitting(false);
      actions.resetForm();
      onToggle();
    });
  };

  const [loading, setLoading] = useState(false);

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    if (!isOpen && loading) {
      setTimeout(() => {
        onToggle();
        setLoading(false);
      }, 1000);
    }
  });

  return (
    <Slide placement="top" timeout={1000} in={isOpen}>
      {(styles) => (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="0.3em" style={{ ...styles, position: 'static' }}>
          <Formik
            initialValues={{ comment: '' }}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form>
                <Field name="comment" validate={validatecomment}>
                  {({ field, form }) => (
                    <FormControl width="40em" isInvalid={form.errors.comment && form.touched.comment}>
                      <FormLabel htmlFor="comment" textAlign={['center']} color="green.600">
                        Comment <EditIcon />
                      </FormLabel>
                      <Card {...field} id="comment" placeholder="Please complete your comment" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button colorScheme="teal" isLoading={props.isSubmitting} type="submit" variant="outline" width="100%">
                  Send
                  <EmailIcon pl="3px" />
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </Slide>
  );
}
