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
    const random = Math.floor(Math.random() * 2),
      leftBox = document.getElementById('left-box'),
      rightBox = document.getElementById('right-box');

    if (random === 0) {
      leftBox.setAttribute('data-real', true);
      leftBox.style.backgroundColor = state.realColor.value;
      rightBox.style.backgroundColor = state.altColor.value;
    } else {
      rightBox.setAttribute('data-real', true);
      rightBox.style.backgroundColor = state.realColor.value;
      leftBox.style.backgroundColor = state.altColor.value;
    }
  }

  handleBoxClick = e => {
    // Kalo box yang diklik punya atribut data-real, dispatch action dgn type = "hit".
    // Kalo nggak, dispatch action dengan type = "miss"
    const result = document.getElementById(e.target.id);
    return result.hasAttribute('data-real')
      ? window.ReduxStore.dispatch(hit())
      : window.ReduxStore.dispatch(miss());
  };

  onStoreChange = () => {
    // bikin 2 box warna yang baru berdasar state.realColor & state.altColor
    const state = window.ReduxStore.getState();
    this.generateBoxes(state);
  };
}
