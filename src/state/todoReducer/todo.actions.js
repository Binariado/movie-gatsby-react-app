import {
  TODO_CREATE, 
  TODO_DELETE, 
  TODO_UPDATE 
} from './todo.types';


export const todoCreate = (payload) => {
  return {
    payload,
    type: TODO_CREATE,
  };
};

export const todoUpdate = (payload) => {
  return {
    payload,
    type: TODO_UPDATE,
  };
};

export const todoDelete = (payload) => {
  return {
    payload,
    type: TODO_DELETE,
  };
};