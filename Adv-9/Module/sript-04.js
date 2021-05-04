define(["module1", "module2"], function (module1Import, module2Import) {
  "use strict";
  const fight = module1Import.fight;
  const module2 = module2Import;

  function dance() {}
  return {
    dance,
  };
});
