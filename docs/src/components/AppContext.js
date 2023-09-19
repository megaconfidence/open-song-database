import React from 'react';

const backend = process.env.REACT_APP_BACKEND;

export const vars = {
  baseUrl: backend,
  restUrl: `${backend}/rest`,
  gqlUrl: `${backend}/graphql`,
  keyUrl: `${backend}/key`,
};

export const AppContext = React.createContext(vars);
