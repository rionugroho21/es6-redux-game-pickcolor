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
  // bikin action untuk update hit & skor.
  // hit = tambah skor (+1)
  return function(dispatch) {
    dispatch({
      type: 'HIT',
      hit
    });
  };
}

export function miss() {
  // bikin action untuk update miss & skor
  // miss = kurangi skor (-1)
  return function(dispatch) {
    dispatch({
      type: 'MISS',
      miss
    });
  };
}
