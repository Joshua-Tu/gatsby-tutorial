import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '../components/button';

export default () => (
  <Layout>
    {/* <h1 style={{ color: 'red', textTransform: 'capitalize' }}>this is our home page</h1> */}
    <h1 className="title">this is our home page</h1>
    <h1 className="title">another heading</h1>
    Hello world!
    <h2>this is second heading</h2>
    <Button>styled button</Button>
  </Layout>
);
