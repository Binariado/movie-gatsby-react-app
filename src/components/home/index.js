import * as React from "react";
import { useSelector } from 'react-redux';
import AllMovie from '../storeMovie/allMovie';

// markup
const IndexPage = () => {
  const auth = useSelector(state => state.auth);
  console.log(auth, 'auth')
  return (
    <AllMovie />
  )
}

export default IndexPage
