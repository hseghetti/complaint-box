import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@chakra-ui/core';
import styles from '../styles/Home.module.css';
import ColorMode from '../components/color-mode';
import Layout from '../components/layout';
import CardForm from '../components/card-form';
import EditableCard from '../components/editable-card';
import { getConfig } from '../config/fire-config';

export default function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getConfig.then((instance)=> {
      instance.firestore()
      .collection('comments')
      .onSnapshot(snap => {
        const comments = [];
        snap.docs.forEach(doc => {
          const data = doc.data();

            if (data.status === 'NEW') {
              comments.push({
                id: doc.id,
                ...data
              });
            }
          }
        );
        setComments(comments);
      });
    });
  }, []);

  const handleEdit = (id) => {
    getConfig.then(instance => {
      instance.firestore()
      .collection('comments')
      .doc(id).delete()
    });

  };

  return (
    <Layout>
      <ColorMode />
      <div className={styles.container}>
        <Head>
          <title>Complaints Box</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={styles.main}>
          <CardForm />
        </main>
        <footer className={styles.footer}>
          <Box w='100%' mt='10vh'>
            <Grid templateColumns='repeat(5, 5fr)' gap={2}>
              {comments.map((comment) => {
                {/* <Box key={comment.id} w='100%'>
                    <Card value={"sadfasdasdasdasdasdasdasdasd asdasdas asdasdasd"} isDisabled size='sm' />
                  </Box> */}
                return (

                  <EditableCard w='100%' value={comment.text} key={comment.id} handleEdit={handleEdit} id={comment.id} />
                );
              })}
            </Grid>
          </Box>
        </footer>
      </div>
    </Layout>
  );
}
