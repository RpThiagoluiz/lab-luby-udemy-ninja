const b = {
  name: "jhon",
  say() {
    console.log(this);
  },
};

const c = {
  name: "Marry",
  say() {
    return function () {
      console.log(this);
    };
  },
};

const d = {
  name: "Cu de linguica",
  say() {
    return () => console.log(this);
  },
};

b.say(); //{ name: 'jhon', say: [Function: say] }
c.say()(); //Object [global]
d.say()(); //{ name: 'Cu de linguica', say: [Function: say] }
