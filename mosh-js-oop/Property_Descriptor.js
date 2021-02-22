
/**
 * Prototype Descriptor
 */
let person = { name: 'Mosh' }

// => [object Object]
console.log(person.toString())


let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
// configurable: true -> 能够删除
// enumerable: false -> 不能 iterate 出来
// value: f toString()
// writable: true -> 能被改写

// 改变一个属性的 Property Descriptor
Object.defineProperty(person, 'name', {
  writable: false,
  enumarable: true,
  configrable: false
})
