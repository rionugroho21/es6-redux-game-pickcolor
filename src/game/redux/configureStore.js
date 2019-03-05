import { createStore } from 'redux';
import { types } from './actions';

// STATE INI NGGAK USAH DIOTAK-ATIK
const initialState = {
  score: 0,
  hit: 0,
  miss: 0,
  realColor: {},
  altColor: {}
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_COLORS:
      // update state dengan realColor & altColor baru,
      // masing-masing color format datanya: { label: nama warna dlm bahasa indonesia, value: warna valid untuk CSS }
      // liat Game.colors
      return {
        ...state,
        realColor: action.realColor,
        altColor: action.altColor
      };
    case types.HIT:
      // update state dengan nilai hit & skor yang baru
      return {
        ...state,
        hit: action.hit,
        score: action.score
      };
    case types.MISS:
      // update state dengan nilai miss & skor yang baru
      return {
        ...state,
        miss: action.miss,
        score: action.score
      };
  }
};

// FUNCTION INI NGGAK USAH DIOTAK-ATIK
export default function configureStore() {
  window.ReduxStore = createStore(reducer);
}
