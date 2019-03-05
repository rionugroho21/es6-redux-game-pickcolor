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
  };
}
