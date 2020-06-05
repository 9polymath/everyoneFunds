import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';
export default props =>{
  return(
      <Container>
          <Head >
              <title>everyoneFunds</title>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <link rel=" icon" type="image/png" href="https://nine-app-media.s3-us-west-2.amazonaws.com/media/favicon.png"/>
          </Head>
          <Header />
          {props.children}
      </Container>
  )
};
