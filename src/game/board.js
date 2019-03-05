import { hit, miss } from './redux/actions';

/**
 * Modul Board ini yang nampilin dua kotak warna.
 * Satu benar, satu salah.
 */
export default class Board {
  realColor;
  altColor;

  constructor() {
    this.element = document.getElementById('board');
    window.ReduxStore.subscribe(this.onStoreChange);
  }

  /**
   * Bikin dua box warna baru.
   * FUNCTION INI NGGAK USAH DIOTAK-ATIK.
   */
  generateBoxes(state) {
    while (this.element.children.length > 0) {
      this.element.removeChild(this.element.firstChild);
    }

    // Bikin box kiri & kanan
    const leftBox = document.createElement('div');
    leftBox.addEventListener('click', this.handleBoxClick);
    leftBox.id = 'left-box';
    this.element.appendChild(leftBox);

    const rightBox = document.createElement('div');
    rightBox.addEventListener('click', this.handleBoxClick);
    rightBox.id = 'right-box';
    this.element.appendChild(rightBox);

    this.leftBox = leftBox;
    this.rightBox = rightBox;

    this.assignColors(state);
  }

  assignColors(state) {
    // 1. pilih warna random buat masing-masing box, dari kemungkinan 2 warna (realColor & altColor)
    // 2. Jadiin backtround box kiri (leftBox) & box kanan (rightBox)
    // 3. Tandain box yg colornya bener pake atribut data-real
  }

  handleBoxClick = e => {
    // Kalo box yang diklik punya atribut data-real, dispatch action dgn type = "hit".
    // Kalo nggak, dispatch action dengan type = "miss"
  };

  onStoreChange = () => {
    // bikin 2 box warna yang baru berdasar state.realColor & state.altColor
    const state = window.ReduxStore.getState();
    this.generateBoxes(state);

    const leftBox = document.getElementById('left-box');
    leftBox.style.backgroundColor = state.realColor.value;

    const rightBox = document.getElementById('right-box');
    rightBox.style.backgroundColor = state.altColor.value;
  };
}
