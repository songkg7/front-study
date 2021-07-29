const heropy = {
  name: 'heropy',
  age: 85,
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

console.log(heropy.getName());
console.log(heropy.setName('haril'));
console.log(heropy.getName());
