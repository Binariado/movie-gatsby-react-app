import * as React from "react";
import { useSelector } from 'react-redux';
import Layout from '../components/layaout';
import AllMovie from '../components/storeMovie/allMovie';

// markup
const IndexPage = () => {
  const auth = useSelector(state => state.auth);
  console.log(auth, 'auth')
  return (
    <Layout>
       <AllMovie />
    </Layout>
  )
}

export default IndexPage
