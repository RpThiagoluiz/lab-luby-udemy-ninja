//new binding this

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xaiver", 55);

console.log(person1); //Person { name: 'Xaiver', age: 55 }

//Implicit binding
const personK = {
  name: "Karen",
  age: 40,
  hi() {
    console.log(`hi ${this.name}`);
  },
};

personK.hi(); //hi Karen

const personKa = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log(`hi ${this.setTimeout}`);
  }.bind(window),
};

const personKas = {
  name: "Karen",
  age: 40,
  hi: function () {
    const inner = () => {
      console.log(`hi ${this.name}`);
    };
    return inner;
  },
};
