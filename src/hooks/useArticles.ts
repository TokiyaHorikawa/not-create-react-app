import * as React from "react";

interface Article {
  id?: string;
  text: string;
}

interface Action {
  type: 'SET' | 'REMOVE',
  payload?: Article
}

const initialSate: Article[] = []

const reducer = (state: Article[], action: Action) => {
  switch (action.type) {
    case 'SET':
      return [...state, action.payload]
    case 'REMOVE':
      return []
    default:
      throw new Error('Action type not found');
  }
}


export const useArticlesReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialSate)
  return {  state, dispatch }
}
