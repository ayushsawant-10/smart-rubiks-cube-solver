function buildCubeStateString3x3() {
  const CUBEJS_FACE_ORDER = ["U","R","F","D","L","B"];

  const FACE_INDEX_MAP = {
    U: [0,1,2,3,4,5,6,7,8],
    R: [2,5,8,1,4,7,0,3,6],
    F: [0,1,2,3,4,5,6,7,8],
    D: [6,7,8,3,4,5,0,1,2],
    L: [6,3,0,7,4,1,8,5,2],
    B: [2,1,0,5,4,3,8,7,6]
  };

  const state = [];

  for (const face of CUBEJS_FACE_ORDER) {
    const stickers = Array.from(
      smartCube3D.querySelectorAll(`.smart-sticker[data-face="${face}"]`)
    );

    const ordered = FACE_INDEX_MAP[face].map(i => stickers[i]);

    ordered.forEach(st => {
      const sym = st.dataset.symbol;
      state.push(sym ? sym.toUpperCase() : "?");
    });
  }

  return state.join("");
}
