function findElement(selector, node = document) {
  return node.querySelector(selector);
}

function createElement(element) {
  return document.createElement(element);
}
