export default class InfoPanel {
  constructor() {
    this.colorLabel = document.getElementById('color-label');
    window.ReduxStore.subscribe(this.onStoreChange);
  }

  onStoreChange = () => {
    const state = window.ReduxStore.getState();

    // 1. Bikin tulisan warna. Tulisannya pake state.realColor.label,
    //    warna teksnya pake state.altColor.value
    // 2. Update tampilan skor, jumlah klik yg benar (hit), & yang salah (miss)
    this.colorLabel.textContent = state.realColor.label;
    this.colorLabel.style.color = state.altColor.value;

    const score = document.getElementById('score');
    score.textContent = 'Skor : ' + state.score;
    const hits = document.getElementById('hits');
    hits.textContent = 'Benar : ' + state.hit;
    const misses = document.getElementById('misses');
    misses.textContent = 'Salah : ' + state.miss;
  };
}
