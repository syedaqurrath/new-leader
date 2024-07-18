// reducers.ts

import { ActionTypes, ADD_SCORE } from './actions';

export interface Score {
  name: string;
  score: number;
  time: string;
}

const initialState: Score[] = [];

const scoreReducer = (state = initialState, action: ActionTypes): Score[] => {
  switch (action.type) {
    case ADD_SCORE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default scoreReducer;
