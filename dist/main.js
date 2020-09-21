(() => {
    "use strict";
    new class {
        constructor() {
            this.name = "UnusedClass";
        }
    };
    console.log(class {});
})();