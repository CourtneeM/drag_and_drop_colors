// word event listeners
const words = [...document.querySelectorAll('.word')];
const colorContainers = [...document.querySelectorAll('.color-container')];

function onDragOver(event) {
  event.preventDefault();
}

function onDragEnter(event) {
  event.preventDefault();
}

function onDrop(currentContainer, dragging) {
  currentContainer.appendChild(dragging);
}

function onDragStart() {
  const word = this;
  setTimeout(() => word.classList.add('invicible', 'dragging'), 0);
}

function onDragEnd() {
  const word = this;
  word.classList.remove('invicible', 'dragging');
}

words.forEach(word => {
  word.addEventListener('dragstart', onDragStart);
  word.addEventListener('dragend', onDragEnd);
});

colorContainers.forEach(colorContainer => {
  colorContainer.addEventListener('dragover', onDragOver);
  colorContainer.addEventListener('dragenter', onDragEnter);

  colorContainer.addEventListener('drop', () => {
    const currentContainer = colorContainer;
    const dragging = document.querySelector('.dragging');
    onDrop(currentContainer, dragging);
  });
});
