
let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
}

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  }
}

// Contructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = createAddress('a', 'b', 'c');
let address3 = new Address('a', 'b', 'c');

// Price Range Objects
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10},
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20},
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50}
]