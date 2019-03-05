export const types = {
  SET_COLORS: 'set colors',
  HIT: 'hit',
  MISS: 'miss'
};

export function setColors(realColor, altColor) {
  // bikin action untuk update state.realColor & state.altColor
  window.ReduxStore.dispatch({
    type: types.SET_COLORS,
    realColor,
    altColor
  });
}

export function hit() {
  const state = window.ReduxStore.getState();
  // bikin action untuk update hit & skor.
  // hit = tambah skor (+1)
  window.ReduxStore.dispatch({
    type: types.HIT,
    hit: state.hit + 1,
    score: state.score + 1
  });
}

export function miss() {
  const state = window.ReduxStore.getState();
  // bikin action untuk update miss & skor
  // miss = kurangi skor (-1)
  window.ReduxStore.dispatch({
    type: types.MISS,
    miss: state.miss + 1,
    score: state.score - 1
  });
}
