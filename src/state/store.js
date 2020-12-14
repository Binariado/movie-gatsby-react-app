// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import loginReducer from './userReducer';
// import todoReducer from './todoReducer';

// const reducers = combineReducers({
//   user: loginReducer,
//   todoList:  todoReducer          
//  });


// const persistConfig = {
//   key: 'root',
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, reducers);


// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middlewares: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

// export const persistor = persistStore(store)
