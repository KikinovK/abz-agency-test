export const getCursorHeight = () => {
  const cursorElement = document.createElement('div');
  cursorElement.style.position = 'absolute';
  cursorElement.style.left = '-9999px';
  cursorElement.style.cursor = 'pointer';
  cursorElement.innerHTML = '&#9679;';
  document.body.appendChild(cursorElement);

  const cursorHeight = cursorElement.offsetHeight;

  document.body.removeChild(cursorElement);

  return cursorHeight;
};
