import React from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/state_';
// import { store } from './src/state';
// import {
//   MuiPickersUtilsProvider
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
// import "./src/styles/global.scss";


export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
       {element}
    </Provider>
  );
};
