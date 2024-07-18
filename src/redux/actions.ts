// actions.ts

export const ADD_SCORE = 'ADD_SCORE';

// Define a base action type that might include additional properties
export interface BaseAction {
  type: string;
  [key: string]: any; // Index signature for any additional properties
}

// Extend BaseAction or directly implement the action type
export interface AddScoreAction extends BaseAction {
  type: typeof ADD_SCORE;
  payload: {
    name: string;
    score: number;
    time: string;
  };
}

// Union type for all action types
export type ActionTypes = AddScoreAction | BaseAction;

// Action creator function
export const addScore = (name: string, score: number, time: string): AddScoreAction => ({
  type: ADD_SCORE,
  payload: { name, score, time },
});
