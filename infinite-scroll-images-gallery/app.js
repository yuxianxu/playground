function generateImageSourceUrl() {
  const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  return `https://picsum.photos/250/350?${hash}`;
}

function getElementImage() {
  const image = new Image();

  image.src = generateImageSourceUrl();
  image.alt = 'random-image-from-unsplash';

  return image;
}

function getElement() {
  const elementImage = getElementImage();
  const element = document.createElement('div');

  element.className = 'element-list_item';
  element.appendChild(elementImage);

  return element;
}

function loadNextBatch(batchSize = 12) {
  while (batchSize--) {
    const element = getElement();
    elementList.appendChild(element);
  }
}

const elementList = document.querySelector('.element-list');

loadNextBatch();

// const scroll = () => {
//   window.scrollBy(0, 400);
// };

// function loadMore() {
//   loadNextBatch();

//   scroll();
// }

function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

function getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

window.onscroll = function() {
  if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
  loadNextBatch();
}
