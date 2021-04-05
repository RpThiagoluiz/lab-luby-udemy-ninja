const obj = {
  name: "Chiquito",
  sing() {
    console.log("a", this);

    const anotherFunc = function () {
      console.log("b", this);
    };

    // const anotherFunc = () => {
    //   console.log("b", this);
    // };
    //resolve, o problema do this

    anotherFunc();
  },
};

obj.sing();
