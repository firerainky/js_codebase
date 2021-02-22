/**
 * Prototypical Inheritance && Polymorphism
 */
function HTMLElement() {
  this.click = function() {
    console.log('clicked');
  }
}

HTMLElement.prototype.focus = function() {
  console.log('focused');
}
HTMLElement.prototype.render = function() {
  return "rendered";
}

function HTMLSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    items.push(item);
  }

  this.removeItem = function(item) {
    const index = items.indexOf(item)
    items.splice(index, 1);
  }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

HTMLSelectElement.prototype.render = function() {
  return `<select>${ this.items.map(item => `
<option>${item}</option>`).join('') }
</select>`;
}

function HTMLImageElement(src) {
  this.src = src;
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLElement;

HTMLImageElement.prototype.render = function() {
  return `<img src='${this.src}' />`
}

// Test
let e = new HTMLElement();
console.log(e);
let s = new HTMLSelectElement([1, 2, 3]);
console.log(s);
let i = new HTMLImageElement('hahaha');
console.log(i)

let elements = [
  new HTMLSelectElement([1, 2, 3]),
  new HTMLImageElement('sdfkjskdf')
];

for (const element of elements) {
  console.log(element.render());
}