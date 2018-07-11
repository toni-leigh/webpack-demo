import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported in this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
